#!/bin/sh

./node_modules/.bin/esbuild --version
./node_modules/.bin/esbuild src/server.ts --bundle --minify --platform=node --outdir=dist