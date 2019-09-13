const models = require('../models')
const Order = models.order
const Transaction = models.transaction
const Menu = models.menu
const Sequelize = require('sequelize')

exports.index = (req, res) => {
    Order.findAll({
        include:[{
            model: Menu,
            as:'menu_id'
        }],
        include:[{
            model: Transaction,
            as:'transaction_id'
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send({
            messages: 'error',
            err
        })
    })
}

exports.show = (req, res) => {
    Order.findOne(
        {where:
        {id: req.params.id}
    }).then(order => {
        res.send({
            order
        })
    }).catch(err => {
        res.send({
            messages: 'err',
            err
        })
    })
}

exports.showBill = (req, res) =>{
    Order.findAll({
        include:[{
            model: Menu,
            as:'menu_id'
        }],
        where: {
            transactionId: req.params.id
        }
    }).then(order => {
        res.send({
            order
        })
    }).catch(err => {
        res.send({
            messages: 'Error',
            err
        })
    })
}

exports.store = async (req, res) => {

    const check = await Order.findOne({
        where: {transactionId: req.body.transactionId, menuId: req.body.menuId}
    })

    try{
        if(!check){
            Order.create(req.body)
            .then(data => {
                res.send({
                    data
                })
            }).catch(err => {
                res.status(500).send({
                    err
                })
            })
        }else{

            const calculateQty = check.qty + req.body.qty
            const calculatePrice = check.price + req.body.price

            Order.update(
                {
                    'qty': calculateQty,
                    'price': calculatePrice
                },
                {
                    where: {
                        transactionId: req.body.transactionId, menuId: req.body.menuId
                    }
                }
            ).then(order => {
                res.send({
                    'messages': 'success',
                    order
                })
            }).catch(err => {
                res.status(500).send({
                    err
                })
            })
        }
    }catch{
        res.send({
            msg: 'error'
        })
    }
}

exports.update = (req, res) => {
    Order.update(req.body, {where: 
        {transactionId: req.params.id}
    }).then(order => {
        res.send({
            messages: 'success',
            order
        })
    }).catch( err => {
        res.send({
            messages: 'Error',
            err
        })
    })  
}

exports.destroy = (req, res) => {
    Order.delete(
        {where: 
        {id: req.params.id}
    }).then(order => {
        res.send({
            messages: 'success',
            order
        })
    }).catch(err => {
        res.send({
            messages: 'error',
            err
        })
    })
}