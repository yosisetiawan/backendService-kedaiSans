const models = require('../models')
const Transaction = models.transaction

exports.index = (req, res) => {
    Transaction.findAll().then(category => res.send(category))
}

exports.show = (req, res) => {
    Transaction.findOne(
        {where: 
        {id: req.params.id}
    }).then(data => {
        res.send({
            data
        })
    }).catch(err => {
        res.send({
            messages: 'Error',
            err
        })
    })
}

exports.store = (req, res) => {
    const {tableNumber} = req.body
    Transaction.create({
        tableNumber : tableNumber
    }).then(data => {
        res.send({
            message:"success",
            data
        })
    }).catch(err => {
        res.send({
            message: 'Failed',
            error: err
        })
    })
}

exports.update = (req, res) => {
    Transaction.update(
        req.body,
        {where: {id: req.params.id}
    }).then(data => {
        res.send({
            messages: 'Update success',
            data
        })
    }).catch(err => {
        res.send({
            messages: 'Sorry error',
            err
        })
    })
}

exports.destroy = (req, res) => {
    Transaction.delete(
        {where: 
        {id: req.params.id}
    }).then(data => {
        res.send({
            messages: 'success',
            data
        })
    }).catch(err => {
        res.send({
            messages:'error',
            err
        })
    })
}