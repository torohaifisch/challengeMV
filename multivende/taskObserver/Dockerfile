FROM node:18-alpine as builder


WORKDIR /usr/src/app
COPY ./package*.json ./
COPY prisma ./prisma/
# clean install
RUN npm ci

COPY . .

RUN npm run build
FROM node:18-alpine as app

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist

RUN npm prune --production

EXPOSE 3000
USER node
CMD [ "node","dist/index.js" ]
