#!/bin/sh
echo setting env variables for dev docker database
. ./bin/set-docker-database.sh
echo starting docker compose prod mode...

COMMAND=start docker compose --env-file=.env -f docker-compose.yml -f docker-compose.prod.yml $@ 