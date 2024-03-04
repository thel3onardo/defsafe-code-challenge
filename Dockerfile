FROM node:21-alpine

WORKDIR /app

COPY ./package.json ./pnpm-lock.yaml /app/

RUN npm install -g pnpm

RUN pnpm install && pnpm store prune

COPY . .

RUN pnpm run build

CMD [ "pnpm", "run", "start" ]