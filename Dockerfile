FROM node:22-alpine3.19
WORKDIR /app
COPY ./bin /app/bin
RUN mkdir src 
RUN npm install pnpm -g
COPY package.json .
RUN pnpm install
ENTRYPOINT [ "npm", "run" ]
CMD ["dev"]