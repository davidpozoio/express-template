#!/bin/sh

SERVICE_NAME=backend
COMMAND="./node_modules/.bin/knex $@"

docker exec $SERVICE_NAME sh -c "npm run esbuild -- config/knexfile.ts --outfile=knexfile.js --format=esm --packages=external --bundle --minify --platform=node"
docker exec $SERVICE_NAME sh -c "$COMMAND"