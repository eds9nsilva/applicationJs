const connection = require('../models/connection');
const { request } = require('express');
const { destroy } = require('../models/connection');

module.exports = {
    store(request, response) {

        const { name } = request.body;

        connection.query(`INSERT INTO client SET ?`, { name }, function (err, result) {
            if (err) throw err;
            return response.json("client successfully registered");
        });
    },

    index(resquest, response) {
        connection.query("SELECT * FROM client", function (err, result) {
            if (err) throw err;
            return response.json(result);
        });
    },

    show(resquest, response) {
        const Id = resquest.headers.id;
        connection.query(`SELECT * FROM client WHERE id = ${Id}`, function (err, result) {
            if (err) throw err;
            return response.json(result);
        })
    },
    update(resquest, response) {
        const { name } = resquest.body;
        const Id = resquest.headers.id;

        connection.query(`UPDATE client SET name = ? WHERE id = ?`, [name, Id], function (err, result) {
            if (err) throw err;
            return response.json({"Message":"Sucesso"});
        })

    },

    destroy(request, response){
        const Id = request.headers.id;
        connection.query("DELETE  FROM client WHERE Id = ?", Id, function(err,result){
            if(err) throw err;
            return response.json({"Message":"successfully deleted"});
        })
    }
};
