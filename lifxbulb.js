#!/usr/bin/node
/*
 * lifxbulb.js - LIFX Bulb
 *
 * This script simulates a bulb. It will console.log the messages it receives.
 */

var     fs  = require('fs');
var     net = require('net');
var  Schema = require('protobuf').Schema;
var  schema = new Schema(fs.readFileSync('lifx.desc'));
var Command = schema['lifx.Command'];
var       r = 0,
          g = 0,
          b = 0,
          n = 0;

var lifxbulb = net.createServer( function (socket) {
    socket.on('data', function(data) {
        num++;
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
    });
});
lifxbulb.listen(5139);

/*
 * Browser Based Debug
 */

var app = require('http').createServer(browser);
app.listen(8002);

function browser (req, res) {
    res.writeHead(200);
    res.end("<html><body style='background-color: rgba("+r+','+g+','+b+");</body></html>\n");
}
