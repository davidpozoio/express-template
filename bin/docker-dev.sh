#!/bin/sh

echo docker compose $@ --build-arg target=development
COMMAND=dev docker compose $@