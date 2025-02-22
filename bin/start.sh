#!/bin/sh

source .env

./bin/build.sh
NODE_PATH=../ node --inspect=0.0.0.0:$DEBUG_PORT_CONTAINER --nolazy --env-file .env dist/server.cjs