const {Router} = require('express');

const routes = Router();

routes.get('/client', (request, reponse) =>{
    return Response.send('Hello world');
})