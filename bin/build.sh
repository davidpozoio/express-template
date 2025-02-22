#!/bin/sh

./node_modules/.bin/esbuild --version
./node_modules/.bin/esbuild src/server.ts --packages=external --bundle --minify --platform=node --outdir=dist

mv ./dist/server.js ./dist/server.cjs
echo server.js rename to server.cjs