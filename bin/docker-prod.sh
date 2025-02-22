#!/bin/sh

COMMAND=start docker compose -f docker-compose.yml -f docker-compose.prod.yml $@ 