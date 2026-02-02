FROM node:18

WORKDIR /app/front

COPY front ./

RUN npm install

# RUN npm install -D vite
RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
