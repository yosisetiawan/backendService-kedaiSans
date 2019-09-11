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

exports.store = (req, res) => {
    Order.create(req.body)
    .then(order =>{
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