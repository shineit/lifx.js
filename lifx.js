#!/usr/bin/node
/*
 * lifxjs.js - LIFX Color Picker for NodeJS
 */

var     fs = require('fs');
var    net = require('net');
var    sys = require('sys');
var    num = 0;

var Schema = require('protobuf').Schema;
var conn = net.createConnection('5139', '127.0.0.1'); // Testing Port

var schema = new Schema(fs.readFileSync('protobuf/lifx.desc'));

var Command = schema['lifx.Command'];

var serialized = Command.serialize({ client: '00:11:22:33:44:55', red: 128, green: 128, blue: 128, alpha: 128 });

setInterval(function () {
    num++;
    conn.write(serialized);
    console.log(num);
}, 50);  // LIFX claims 10-30 changes per second.  This mimics 20.
