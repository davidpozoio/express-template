#!/bin/sh

./node_modules/.bin/esbuild --version
./node_modules/.bin/esbuild src/server.ts --packages=external --bundle --minify --platform=node --outdir=dist