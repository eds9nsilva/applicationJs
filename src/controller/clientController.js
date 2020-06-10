
module.exports = {
    store(request, response) {
        console.log(request.body);
        return response.send('Funcionando');
    }
};