FROM node:18.16.0-alpine3.17


COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js

RUN npm install


ENTRYPOINT [ "node","server.js" ]