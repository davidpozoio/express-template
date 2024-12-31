#!/bin/sh

./bin/build.sh
node --env-file .env dist/server.js