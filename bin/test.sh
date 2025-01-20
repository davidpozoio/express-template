#!/bin/sh
SERVICE_NAME=backend
# init the backend service to be able to execute the next commands 
docker compose up $SERVICE_NAME -d
# retrieve enable-default-database from application.config.yml
enable_default_database=$(docker exec $SERVICE_NAME sh -c "yq e '.application.test.enable-default-database' ./application.config.yml")

echo "enable default database: $enable_default_database"
if [ $enable_default_database = "true" ]
then 
    # start test-database
    docker compose -f docker-compose.yml -f docker-compose-test.yml up testdatabase -d
fi

# start tests
docker compose run backend test -- "$@"