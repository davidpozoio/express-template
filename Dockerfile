FROM node:22-alpine3.19
WORKDIR /app
RUN apk add --no-cache wget
RUN wget https://github.com/mikefarah/yq/releases/download/v4.2.0/yq_linux_amd64 -O /usr/bin/yq &&\
    chmod +x /usr/bin/yq
COPY ./bin /app/bin
RUN mkdir src 
RUN npm install bun -g
COPY package.json .
RUN bun install
ENTRYPOINT [ "npm", "run" ]
CMD ["dev"]