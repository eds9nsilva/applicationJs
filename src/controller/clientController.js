const connection = require('../models/connection')
module.exports = {
    async store(request, response) {
      
        const {name} = request.body;

        connection.query(`INSERT INTO client SET ?`, {name}, function (err, result) {
            if (err) throw err;
            console.log("client successfully registered");
        });
        return response.send({name});

        
    }
};
