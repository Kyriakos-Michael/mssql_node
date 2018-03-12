// node server.js in order to start this. 

const express = require('express');
 const app = express();

app.get('/', function (req, res) {
    let sql = require("mssql");

    var config = {
        user : 'sa',
        password : 'jenus123#',
        server : 'filehold.jenusplanet.com',
        database : 'JFLOWSDB'
    }
    sql.connect(config, function (err) {
        if (err) console.log(err);


        var request = new sql.Request();

        request.query('select * from dbo.GlobalSelectedValues', function (err, recordset) {
            if (err) console.log(err)

            res.send(recordset);
        })
    })
})

var server = app.listen(5000, function () {
    console.log('Server is Running..');
});