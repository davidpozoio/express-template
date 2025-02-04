#/bin/sh

last_value=$#

if [ $last_value = "2" ]
then
    npm run docker:knex -- "migrate:$1" --env $2
elif [ $last_value = "3" ]
then
    npm run docker:knex -- "migrate:$1" $2 --env $3
fi