#/bin/sh

COMMAND="npm run prisma -- $@"

docker compose run --rm --entrypoint sh backend -c "$COMMAND"