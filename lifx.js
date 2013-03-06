#!/usr/bin/node
/*
 * lifxjs.js - LIFX Color Picker for NodeJS
 */

var    app = require('http').createServer(browser);
var     io = require('socket.io').listen(app);
var    url = require('url');
var     fs = require('fs');
var    net = require('net');
var    num = 0;

var Schema = require('protobuf').Schema;
var conn = net.createConnection('5139', '127.0.0.1'); // Testing Port

var schema = new Schema(fs.readFileSync('protobuf/lifx.desc'));

io.set('log level', 1);
var Command = schema['lifx.Command'];
app.listen(8000);
function browser (req, res) {
  var request = url.parse(req.url, true);
  var action = request.pathname;
  console.log(action);

  if (action == '/colormap.gif') {
     var img = fs.readFileSync('./www/colormap.gif');
     res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');
  } else if (action == '/socket.io.min.js') {
    var s = fs.createReadStream('./socket.io.min.js');
    s.on('error', function () {
        req.writeHead(404);
        req.end();
    })
    s.once('fd', function () {req.writeHead(200);});
    s.pipe(resp);
  } else if (action == '/favicon.ico') {
     res.writeHead(404);
     res.end();
  } else {
     var html = fs.readFileSync('./www/index.html');
     res.writeHead(200, {'Content-Type': 'text/html' });
     res.end(html);
  }
}

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
