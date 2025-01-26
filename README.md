# FIRST STEPS

Install the dependencies, use any package installer (npm, pnpm, yarn, etc)

```bash
npm install
```

To enable husky hooks for validation conventional commits and lint, execute the next command.

```bash
npm run prepare
```

# INIT PROJECT IN DOCKER

if you're using a system based in linux you probably need to use `sudo` before the next commands.

## START PROJECT IN DEV MODE

```bash
npm run docker:dev -- up
```

## START PROJECT IN PROD MODE

```bash
npm run docker:prod -- up
```

## START PROJECT IN TEST MODE

```bash
npm run docker:test
```

### For watch mode

```bash
npm run docker:test -- --watchAll
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
  spa-mode: true
  test:
    enable-default-database: true
```

These are the default values:
`spa-mode` redirects the default route of the server always to the same index in `public/frontend/index.html`.

`enable-default-database`: this command enables the default test database, you can use this database to do your tests

The other configurations are handled using the `.env` file, this file is recommended to include to .gitignore once you start to create your project.

# ENV

In the last section of the `.env` file you can find CERTS SSL variables, here you have the variable `HTTPS_REDIRECT`, this boolean value enables https default redirection from `http` protocol to `https` protocol, useful for production domains configuration.

```bash
######### CERTS SSL ###################
KEY_SSL_PATH=./certs/key.pem
CERT_SSL_PATH=./certs/cert.pem
HTTPS_REDIRECT=false
```

# MIGRATIONS

For handling migrations the default system included is `knex`.

The migrations are saved in the `src/db/migrations`.

Here are the commands.

```bash
npm run docker:knex -- "any other command that you want, read knex documentation"
```

Short command to migrate

```bash
npm run migrate -- $YOUR_ACTION $ENV_DATABASE"
```

`$YOUR_ACTION`: here you can put any command that is used with migrate in knex (up, latest, list, etc.).

`$ENV_DATABASE`: specify what database you want to migrate (dev, test).

# LINT

This project uses biome.js library for linting, to execute all the related commands to biome you can use:

```bash
npm run biome -- "ANY BIOME COMMAND"
```

# NOTES

you can init the project without docker, but you need to add other credentials for the database .env file.

The default type of database used is postgresql

## TESTING

This project uses jest for testing

## COMMITS

This project uses conventional commits, actually has a hook done in `husky` to validate it. So try to follow the convention before doing a commit.
