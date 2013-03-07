#!/usr/bin/node
/*
 * lifxbulb.js - LIFX Bulb
 *
 * This script simulates a bulb. It will console.log the messages it receives.
 */

var     fs  = require('fs');
var     net = require('net');
var  Schema = require('protobuf').Schema;
var  schema = new Schema(fs.readFileSync('protobuf/lifx.desc'));
var Command = schema['lifx.Command'];
var    app = require('http').createServer(browser);
var     io = require('socket.io').listen(app);
var       r = 0,
          g = 0,
          b = 0,
          n = 0;
io.set('log level', 1);

var lifxbulb = net.createServer( function (socket) {
    socket.on('data', function(data) {
        n++;
        var command = Command.parse(data);
        console.log("Message "+n+" received for client: " + command.client +
            ".  R: "+command.red +
            "  G: "+command.green +
            "  B: "+command.blue +
            "  A: "+command.alpha
            );
        r = command.red;
        g = command.green;
        b = command.blue;
        io.sockets.emit('color', { red: r, green: g, blue: b });
    });
});
lifxbulb.listen(5139);

/*
 * Browser Based Debug
 */
app.listen(8008);

function browser (req, res) {
    var s = fs.createReadStream('./www/lifxbulb.html');
    s.on('error', function () {
        req.writeHead(404);
        req.end();
    })
    s.once('fd', function () {req.writeHead(200);});
    s.pipe(res);
}

/*
io.sockets.on('connection', function (socket) {
    socket.on('data', function (data) {
        num++;
        console.log("Message "+num+": "+data);
        var serial = Command.serialize(data);
        conn.write(serial);
    });

    socket.on('disconnect', function () {
        // Placeholder
    });
});
*/
