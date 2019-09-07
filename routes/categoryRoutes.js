const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000


app.use(bodyParser.json())

const categoryController = require('../controllers/categoryController')

app.group("/api/v1/", (router) => {
    router.get('/categories', categoryController.index)
    router.get('/categories/:id', categoryController.show)
    router.post('/categorie', categoryController.store)
    router.put('/categorie/:id', categoryController.update)
    router.delete('/categorie/:id', categoryController.destroy)
})

module.exports = app