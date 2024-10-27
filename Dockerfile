FROM node:18-alpine as builder

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm run build

FROM node:16-alpine as runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./standalone
COPY --from=builder /app/public /app/standalone/public
COPY --from=builder /app/.next/static /app/standalone/.next/static

EXPOSE 3000

CMD ["node", "./standalone/server.js"]