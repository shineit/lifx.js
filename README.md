lifx.js - a node.js LIFX implimentation
=======================================

[![Build Status](https://travis-ci.org/jnovack/lifx.js.png)](https://travis-ci.org/jnovack/lifx.js)

This is an experimental project for node.js to control LIFX.  [LIFX](http://lifx.co) bulbs are
controlled via protocol buffers.

## Disclaimer

At this time, LIFX has not publicly released the SDK, therefore, this is merely
a proof of concept.

This module has a rapid lifecycle when being actively developed.  Please stay
tuned to the [github page](http://github.com/jnovack/lifx.js) as the [LIFX](http://lifx.co) project
progresses.

## Install

lifx.js is registered with `npm`, however, it is not a full-fledged module yet.
You should not install it via `npm`, but rather check it out via `git` from the
command line.

Checkout:

    git clone git://github.com/jnovack/lifx.js.git

Install deps:

    cd lifx.js/
    npm install -d

Run the following, each within separate windows:

    node ./lifxbulb.js
    node ./lifx.js

Finally, browse to [http://localhost:8000](http://localhost:8000) and hover over the color picker. In
the `lifxbulb.js` window, you should see the messages being decoded. To see what
your lifxbulb might respond like, open another browser window and go to
[http://localhost:8008](http://localhost:8008) to watch the colors change.

If you are having trouble, change your browser to something that supports modern
web extensions, such as the latest Chrome, FireFox or Safari.

<img src="https://github.com/jnovack/lifx.js/blob/master/www/screenshot.png?raw=true">

## Dependencies

lifx.js needs the following dependencies to work.

  * node >= 0.8.21
  * socket.io >= 0.9.11
  * protobuf >= 0.8.6

lifx.js may work with prior versions, but is not tested.

## Contributing

Please! Send me a pull-request, I will happily merge.

## License

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

