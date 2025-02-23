#!/bin/sh

COMMAND="npm run knex -- $@"

docker compose run  --entrypoint sh backend -c "npm run esbuild -- config/knexfile.ts --outfile=knexfile.js --format=esm --packages=external --bundle --minify --platform=node"

docker compose run --entrypoint sh backend -c "$COMMAND"