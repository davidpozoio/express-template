#!/bin/sh
echo setting env variables for dev docker database

. ./bin/set-docker-database.sh

echo starting docker compose dev mode...

echo docker compose $@ 

COMMAND=debug docker compose --env-file=.env $@