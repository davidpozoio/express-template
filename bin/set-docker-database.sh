#!/bin/sh

DATABASE_CONFIG_JSON=$(npx js-yaml config/database.config.yml)
DEV_DATABASE=$(node bin/extract-values.js "$DATABASE_CONFIG_JSON" 'databases.dev')
DATABASE_NAME=$(node bin/extract-values.js "$DEV_DATABASE" 'name')
DATABASE_HOST=$(node bin/extract-values.js "$DEV_DATABASE" 'host')
DATABASE_PORT=$(node bin/extract-values.js "$DEV_DATABASE" 'port')
DATABASE_PASSWORD=$(node bin/extract-values.js "$DEV_DATABASE" 'password')
DATABASE_USER=$(node bin/extract-values.js "$DEV_DATABASE" 'user')

export DATABASE_NAME
export DATABASE_HOST
export DATABASE_PORT
export DATABASE_PASSWORD
export DATABASE_USER
