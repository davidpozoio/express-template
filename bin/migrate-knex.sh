#/bin/sh

npm run docker:knex -- "migrate:$1" --env $2