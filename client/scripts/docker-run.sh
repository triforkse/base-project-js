#!/bin/bash

set -e

HOSTNAME=$API_PORT_3000_TCP_ADDR

sed 's/REPLACEMEURL/$HOSTNAME:3000/' ./app.js > ./app2.js
mv ./app2.js ./app.js

python -m SimpleHTTPServer 8080
