const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const multer = require('multer')
const path = require('path')

const app = express()
const port = process.env.port || 3000

// Setting Multer Storage
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

app.use(bodyParser.json())

const menuController = require('../controllers/menuController')

app.group("/api/v1/", (router) => {
    router.get('/menus', menuController.index)
    router.get('/menus/:id', menuController.show)
    router.post('/menu', upload.single('images'),menuController.store)
    router.put('/menu/:id', menuController.update)
    router.delete('/menu/:id', menuController.destroy)
})

module.exports = app