FROM node:22-alpine3.19 AS base
WORKDIR /app
RUN apk add --no-cache wget
RUN mkdir src 
RUN npm install bun -g
COPY ./bin /app/bin
COPY package.json .

FROM base AS development
RUN bun install
ENTRYPOINT [ "npm", "run" ]
CMD ["dev"]

FROM base AS production
WORKDIR /app
RUN npm install esbuild -g
RUN bun install --production
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]
