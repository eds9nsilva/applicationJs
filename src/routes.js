const {Router} = require('express');

const routes = Router();

routes.get('/client', (Resquest, Response) => {
    console.log(Resquest.body);
    return Response.send('Hello world');
});

module.exports = routes;