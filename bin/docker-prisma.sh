#/bin/sh

COMMAND="npm run prisma -- $@"

docker compose run --entrypoint sh backend -c "$COMMAND"