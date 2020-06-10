const {Router} = require('express');
const clientController = require('./controller/clientController')
const routes = Router();

routes.get('/client', clientController.store);

module.exports = routes;