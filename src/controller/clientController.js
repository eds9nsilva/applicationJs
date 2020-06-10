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
        connection.query('SELECT FROM client', function (err, result){
            if(errr) throw err;
            /*connection.on('error', function(err){
                console.log("[mysql error]", err);
            })*/
            result.forEach(result => {
                console.log(`${result.name}, ${result.Id}`);
            })
        });
    }
};
