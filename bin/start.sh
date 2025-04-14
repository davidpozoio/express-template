#!/bin/sh

source .env

./bin/build.sh
NODE_PATH=../ node --env-file .env dist/server.js