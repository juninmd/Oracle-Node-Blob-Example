var fs = require('fs');
var oracledb = require('oracledb');

oracledb.getConnection(
    {
        user: "user",
        password: "pass",
        connectString: "connection"
    },
    function (err, connection) {
        if (err) { console.error(err.message); return; }

        connection.execute(
            "select arquivo from minhatabela where campo = :id",
            { id: 666 },
            function (err, result) {
                if (err) { console.error(err.message); return; }
                if (result.rows.length === 0) { console.log("No results"); return; }

                var lob = result.rows[0][0];
                if (lob === null) { console.log("BLOB was NULL"); return; }

                lob.on('error',
                    function (err) {
                        console.log("lob.on 'error' event");
                        console.error(err);
                    });

                var arrayBytes = [];
                lob.on('close', function (data) {

                    var base64data = new Buffer(arrayBytes).toString('base64');

                    fs.writeFile("E:\\texto.txt", base64data, function (err) {
                        if (err) {
                            return console.log(err);
                        }

                        console.log("The file was saved!");
                    });

                    console.log("lob.on 'close' event");
                    connection.release(function (err) {
                        if (err) console.error(err.message);
                    });
                });

                lob.on('data', function (chunk) {
                    Array.prototype.push.apply(arrayBytes, chunk);
                });
            });
    });