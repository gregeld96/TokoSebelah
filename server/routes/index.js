const route = require('express').Router()
const userRoute = require('./user');
const categoryRoute = require('./category');
const productRoute = require('./product');
const customerRoute = require('./customer')

route.use('/', userRoute);
route.use('/categories', categoryRoute);
route.use('/products', productRoute);
route.use('/customers', customerRoute)

module.exports = route