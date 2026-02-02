FROM node:18

WORKDIR /app/server

COPY server ./
RUN npm install

RUN npx prisma generate
RUN npx prisma migrate deploy

RUN npm install pm2@latest -g

CMD ["pm2-runtime", "start", "/app/server/dist/index.js", "-i", "0"]
