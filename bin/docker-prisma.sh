#/bin/sh

COMMAND="npm run prisma -- $@"
. ./bin/set-docker-database.sh
docker compose run --rm --entrypoint sh backend -c "$COMMAND"