lifx.js - a node.js lifx implimentation
======================================

This is an experimental project for node.js to control LIFX.  [LIFX](http://lifx.co) bulbs are
controlled via protocol buffers. At this time, LIFX has not publicly released
the SDK, therefore, this is merely a proof of concept.

Install with:

    cd node_modules/
    git clone https://github.com/jnovack/lifx.js

Run the following, each within separate windows:

    node ./lifxbulb.js
    node ./lifx.js

Finally, browse to http://localhost:8000 and hover over the color picker. In
the `lifxbulb.js` window, you should see the messages being decoded.

## Dependencies

LIFXjs needs the following dependencies to work.

  * nodejs >= 0.8.6
  * socket.io >= 0.9.11
  * protobuf >= 0.8.6

LIFXjs may work with prior versions, but is not tested.

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

