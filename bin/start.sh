#!/bin/sh

source .env

./bin/build.sh
node --inspect=0.0.0.0:$DEBUG_PORT_CONTAINER --signal SIGINT --nolazy --env-file .env dist/server.js