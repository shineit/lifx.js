#!/usr/bin/node
/*
 * lifxjs.js - LIFX Color Picker for NodeJS
 *
 * Front-end for lifx.js control.
 */

var browser;
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
    console.log("Message " + num + ": " + util.inspect(data, false, null));
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
function browser(req, res) {
  var request = url.parse(req.url, true),
    action = request.pathname,
    file = false,
    mime = false,
    s = false;

  if (action === '/color-picker.png') {
    file = "./www/color-picker.png";
    mime = "image/png";
  } else if (action === '/bootstrap.min.css') {
    file = "./www/bootstrap.min.css";
    mime = "text/css";
  } else if (action === '/socket.io.min.js') {
    // TODO: This is not working correctly, currently file is included in index.html
    file = './socket.io.min.js';
    mime = "text/javascript";
  } else if (action === '/') {
    file = "./www/index.html";
    mime = "text/html";
  }

  if (file && mime) {
    s = fs.createReadStream(file);
    s.on('error', function () {
      res.writeHead(404);
      res.end();
    });
    s.once('fd', function () {
      req.writeHead(200, { 'Content-Type' : mime });
    });
    s.pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
}
