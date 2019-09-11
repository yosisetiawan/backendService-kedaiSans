const models = require('../models')
const Menu = models.menu
const Category = models.categorie

exports.index = (req, res) => {
    Menu.findAll({
        include:[{
            model: Category,
            as:"category_id"
        }]
    })
    .then(menu => {
        res.send(menu)
    }).catch(err => {
        res.send({
            messages: 'error',
            err
        })
    })
}

exports.show = (req, res) => {
    Menu.findOne(
        {where:
        {id: req.params.id}
    }).then(menu => {
        res.send({
            menu
        })
    }).catch(err => {
        res.send({
            messages: 'err',
            err
        })
    })
}

exports.store = (req, res) => {
    Menu.create({
        name: req.body.name,
        price: req.body.price,
        categoryId: req.body.category,
        images: req.file.filename
    })
    .then(menu =>{
        res.send({
             messages: 'success',
             menu
         })
    }).catch(err => {
        res.send({
            messages: 'error',
            err
        })
    })
}

exports.update = (req, res) => {
    Menu.update(req.body, {where: 
        {id: req.params.id}
    }).then(menu => {
        res.send({
            messages: 'success',
            menu
        })
    }).catch( err => {
        res.send({
            messages: 'Error',
            err
        })
    })  
}

exports.destroy = (req, res) => {
    Menu.delete(
        {where: 
        {id: req.params.id}
    }).then(menu => {
        res.send({
            messages: 'success',
            menu
        })
    }).catch(err => {
        res.send({
            messages: 'error',
            err
        })
    })
}