#!/bin/sh

COMMAND="npm run knex -- $@"

docker compose run --entrypoint sh backend -c "$COMMAND"