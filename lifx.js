#!/usr/bin/node
/*
 * lifxjs.js - LIFX Color Picker for NodeJS
 *
 * Front-end for lifx.js control.
 */

var    app = require('http').createServer(browser);
var     io = require('socket.io').listen(app);
var     fs = require('fs');
var    net = require('net');
var    url = require('url');
var   util = require('util');
var Schema = require('protobuf').Schema;
var schema = new Schema(fs.readFileSync('protobuf/lifx.desc'));
var    num = 0;


/* This is currently sending data to the ./lifxbulb.js application
 * which requires to be running prior to starting this application.
 * In the future, this should send to an actual lifx bulb.
 */
var lifx = net.createConnection('5139', '127.0.0.1');


io.set('log level', 1);
var Command = schema['lifx.Command'];
app.listen(8000);

/* Socket (Back End)
 * Process the incoming color data and send to the lifx bulb
 */
io.sockets.on('connection', function (socket) {
    socket.on('data', function (data) {
        num++;
        console.log("Message "+num+": " + util.inspect(data, false, null));
        var serial = Command.serialize(data);
        lifx.write(serial);
    });

    socket.on('disconnect', function () {
        // Placeholder
    });
});


/* Browser (Front End)
 * Give the user a pretty interface to control the color
 */
function browser (req, res) {
  var request = url.parse(req.url, true);
  var action = request.pathname;

  if (action == '/color-picker.png') {
     var img = fs.readFileSync('./www/color-picker.png');
     res.writeHead(200, {'Content-Type': 'image/png' });
     res.end(img, 'binary');
  } else if (action == '/bootstrap.min.css') {
    // TODO: This is not working correctly, currently file is included in index.html
    var s = fs.createReadStream('./www/bootstrap.min.css');
    s.on('error', function () {
        res.writeHead(404);
        res.end();
    })
    s.once('fd', function () {req.writeHead(200, { 'Content-Type':'text/css'});});
    s.pipe(res);
  } else if (action == '/socket.io.min.js') {
    // TODO: This is not working correctly, currently file is included in index.html
    var s = fs.createReadStream('./socket.io.min.js');
    s.on('error', function () {
        res.writeHead(404);
        res.end();
    })
    s.once('fd', function () {req.writeHead(200, { 'Content-Type':'text/javascript'});});
    s.pipe(res);
  } else if (action == '/favicon.ico') {
     res.writeHead(404);
     res.end();
  } else {
     var html = fs.readFileSync('./www/index.html');
     res.writeHead(200, {'Content-Type': 'text/html' });
     res.end(html);
  }
}
