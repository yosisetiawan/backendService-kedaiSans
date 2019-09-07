const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000


app.use(bodyParser.json())

const transactionController = require('../controllers/transactionController')

app.group("/api/v1/", (router) => {
    router.get('/transactions', transactionController.index)
    router.get('/transactions/:id', transactionController.show)
    router.post('/transaction', transactionController.store)
    router.put('/transaction/:id', transactionController.update)
    router.delete('/transaction/:id', transactionController.destroy)
})

module.exports = app