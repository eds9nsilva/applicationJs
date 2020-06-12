const {Router} = require('express');
const clientController = require('./controller/clientController');
const routes = Router();

routes.post('/client', clientController.store);
routes.get('/listClient', clientController.index);
routes.get('/searchClient', clientController.show);
routes.put('/update', clientController.update);
routes.delete('/delete', clientController.destroy);


module.exports = routes;