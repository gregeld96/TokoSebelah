const route = require('express').Router();
const controller = require('../controllers/user');

route.post('/login', controller.login);
route.post('/register', controller.register)

module.exports = route;