const connection = require('../models/connection')
module.exports = {
    store(request, response) {
      
        const {name} = request.body;

        connection.query(`INSERT INTO client SET ?`, {name}, function (err, result) {
            if (err) throw err;
            console.log("client successfully registered");
        });
        return response.json("client successfully registered");
    },

    index(resquest, response){
        connection.query("SELECT * FROM client", function (err, result) {
            if (err) throw err;
            return response.json(result);
          });
    }
};
