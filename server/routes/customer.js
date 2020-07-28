const route = require('express').Router();
const controller = require('../controllers/customer');
const Authentication = require('../middlewares/customerAuthe')
const Authorization = require('../middlewares/customerAutho')

route.get('/product', controller.readProduct)
route.get('/category/:name', controller.readCategory)
route.use(Authentication)
route.get('/', controller.readCart)
route.post('/:id', controller.add) //Ada Authorization
route.put('/:id', Authorization, controller.update)
route.delete('/:id', Authorization, controller.delete)

module.exports = route;