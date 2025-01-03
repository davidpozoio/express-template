#!/bin/sh

SERVICE_NAME=backend
COMMAND="./node_modules/.bin/knex $@"

docker exec $SERVICE_NAME sh -c "$COMMAND"