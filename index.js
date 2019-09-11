const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use('/static',express.static('public'))

const orderRoutes = require('./routes/orderRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const menuRoutes = require('./routes/menuRoutes')
const categorieRoutes = require('./routes/categoryRoutes')

app.get('/', (req, res) => {
    res.send('Server Has Been Running')
})

app.use(orderRoutes)
app.use(transactionRoutes)
app.use(menuRoutes)
app.use(categorieRoutes)

app.listen(port, () => console.log(`server running on port ${port}!!`))
