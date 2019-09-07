const models = require('../models')
const Category = models.categorie

exports.index = (req, res) => {
    Category.findAll()
    .then(category => {
        res.send(category)
    }).catch(err => {
        res.send({
            messages: 'error',
            err
        })
    })
}

exports.show = (req, res) => {
    Category.findOne(
        {where:
        {id: req.params.id}
    }).then(category => {
        res.send({
            category
        })
    }).catch(err => {
        res.send({
            messages: 'err',
            err
        })
    })
}

exports.store = (req, res) => {
    Category.create(req.body)
    .then(category =>{
        res.send({
             messages: 'success',
             category
         })
    }).catch(err => {
        res.send({
            messages: 'error',
            err
        })
    })
}

exports.update = (req, res) => {
    Category.update(req.body, {where: 
        {id: req.params.id}
    }).then(category => {
        res.send({
            messages: 'success',
            category
        })
    }).catch( err => {
        res.send({
            messages: 'Error',
            err
        })
    })  
}

exports.destroy = (req, res) => {
    Category.delete(
        {where: 
        {id: req.params.id}
    }).then(category => {
        res.send({
            messages: 'success',
            category
        })
    }).catch(err => {
        res.send({
            messages: 'error',
            err
        })
    })
}