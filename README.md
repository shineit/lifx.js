lifx.js - a node.js LIFX implimentation
=======================================

**[http://lifx.ozmonet.com](http://lifx.ozmonet.com)**

[![Build Status](https://travis-ci.org/jnovack/lifx.js.png?branch=master)](https://travis-ci.org/jnovack/lifx.js)


This is an experimental project for node.js to control your [LIFX](http://lifx.co) bulbs.

## Disclaimer

At this time, LIFX has not publicly released the SDK, nor the protocol spec,
therefore, this is merely a proof of concept using the protocol buffers transport
as announced.

This module has a rapid lifecycle when being actively developed.  Please stay
tuned to the [github page](http://github.com/jnovack/lifx.js) as the [LIFX](http://lifx.co) project
progresses.

I am in no way, shape, or form affliated with or endorsed by any projects
referenced within this project. I am merely a fan of all of them.

## Install

lifx.js is registered with `npm`, however, it is not a module, it is an application.
You should install it via command line into it's own project directory.

npm (stable):

    npm install lifx.js

or git (development):

    git clone git://github.com/jnovack/lifx.js.git
    cd lifx.js/
    npm install -d

Run the following, each within separate windows. The lifxbulb script must be started
first. You should consider using [forever](https://npmjs.org/package/forever) to keep them alive.

    node ./lifxbulb.js
    node ./lifx.js

Finally, browse to [http://localhost:8000](http://localhost:8000) and hover over the color picker. In
the `lifxbulb.js` window, you should see the messages being decoded. To see what
your lifxbulb might respond like, open another browser window and go to
[http://localhost:8008](http://localhost:8008) to watch the colors change.

## Dependencies

lifx.js needs the following dependencies to work.

  * node >= 0.8.21
  * socket.io >= 0.9.11
  * protobuf >= 0.8.6

lifx.js may work with prior versions, but is not tested.

## Demo

You can view a live demo at [http://lifx.ozmonet.com:8000](http://lifx.ozmonet.com:8000) and view the bulb
at [http://lifx.ozmonet.com:8008](http://lifx.ozmonet.com:8008).

If you are having trouble, change your browser to something that supports modern
web extensions (websockets), such as the latest Chrome, FireFox or Safari.

<img src="https://github.com/jnovack/lifx.js/blob/master/www/screenshot.png?raw=true">

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

