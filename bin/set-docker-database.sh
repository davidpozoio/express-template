#!/bin/sh
source .env
sed -e 's|\${USE_DATABASE}|'"$USE_DAtABASE"'|g' \
                   config/database.config.yml > config/database.config.parsed.yml

DATABASE_CONFIG_JSON=$(npx js-yaml config/database.config.parsed.yml)
rm config/database.config.parsed.yml

DEV_DATABASE=$(node bin/extract-values.js "$DATABASE_CONFIG_JSON" 'databases.dev')
DATABASE_ENV=$(node bin/extract-values.js "$DEV_DATABASE" 'env')
if [ -z DATABASE_ENV ]; then
    set -a
    source "$DATABASE_ENV"
    set +a
    exit 0
fi

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
