# FIRST STEPS

Install the dependencies, use any package installer (npm, pnpm, yarn, bun, etc)

```bash
npm install
```

To enable husky hooks for validation conventional commits and lint, execute the next command.

```bash
npm run husky
```

# INIT PROJECT

## START PROJECT IN DEV MODE

```bash
npm run dev
```

## START PROJECT IN PRODUCTION

```bash
npm run start
```

## BUILD PROJECT

Generates the build of your application
.

```bash
npm run build
```

## START TESTS

```bash
npm run test
```

# DOCKER

if you're using a system based in linux you probably need to use `sudo` before the next commands.
This mode provides a postgres database.

## START PROJECT IN DEV MODE

```bash
npm run docker:dev -- up
```

## START PROJECT IN PROD MODE

```bash
npm run docker:prod -- up
```

## CLEAN DOCKER CONTAINERS AND OTHER SERVICES

This command remove all the running containers, networks, etc. `equivalent to use docker compose down`.

```bash
npm run docker:clear
```

# APPLICATION CONFIGURATION

You can config the application using the application.config.yml

```yml
application:
  spa:
    enable: true #enable automatic redirect
    index: "public/src/frontend/index.html" #set the default redirect path to index
  database:
    enable-try-connection: true #you can test if the current database is up
```

The other configurations are handled using the `.env` file and `config/database.config.yml`, these file are recommended to include to .gitignore once you start to create your project.

# ENV

You can configure the server mode, when set the mode as dev you can see specific log info in the response when you get an error.
In prod mode you can only see a server error without specific information, this is useful for production environments.

```bash
######### MODE #######################
MODE=prod # mode can be dev, prod

```

In this section you can configure the debug port provided for node.

```bash
######### APP CONFIGURATION ###########
DEBUG_PORT_CONTAINER=9229
DEBUG_PORT=9229
```

Here you can configure the server port the default api prefix and the global rate limit

```bash
######## SERVER CONFIG ###################
PORT=8000
API_PREFIX=/api/v1
RATE_LIMIT_MAX=200
```

This is the configuration for the default database provided by docker-compose file, you don't need to do anything here

```bash
######### DATABASE POSTGRES CONFIG #############
#don't override these values
POSTGRES_USER=${DATABASE_USER}
POSTGRES_PASSWORD=${DATABASE_PASSWORD}
POSTGRES_DB=${DATABASE_NAME}
```

This the default database url use for prisma and its migrations

```bash
DATABASE_URL=postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?schema=public
```

# DATABASE CONFIG

The file `config/database.config.yml` provides the configuration variables for your databases.

```yaml
config:
  use: "dev" #specify what database you want to use
databases:
  dev:
    client: "postgresql" #specify what type of database you use
    user: root
    name: postgres
    host: database
    port: 5432
    password: "1234"
```

You can add new databases after dev default database config like this

```yaml
dev:
  client: "postgresql"
  user: root
  name: postgres
  host: database
  port: 5432
  password: "1234"
new-database:
  client: "mysql"
  user: root
  name: mydatabase
  host: test
  port: 5433
  password: "1234"
```

# MIGRATIONS

For handling migrations the default system included is `prisma`.

The migrations are saved in the `prisma/migrations`.

Here are the commands.

```bash
npm run prisma -- $PRISMA_COMMAND"
```

If you're running your database in a private docker network you can use the next command.

```bash
npm run docker:prisma -- $PRISMA_COMMAND
```

You can read prisma documentation to know what commands you can execute

# LINT

This project uses biome.js library for linting, to execute all the related commands to biome you can use:

```bash
npm run biome -- "ANY BIOME COMMAND"
```

# NOTES

you can init the project without docker, but you need to add other credentials for the database .env file.

The default type of database used is postgresql

## TESTING

This project uses `vitest` and testcontainers for testing. To start your tests you can use the next command.

There are some utils for testing.

## COMMITS

This project uses conventional commits, actually has a hook done in `husky` to validate it. So try to follow the convention before doing a commit.
