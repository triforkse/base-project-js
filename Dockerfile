FROM node:5.0

ADD . /app

WORKDIR /app

RUN npm install
RUN npm run build

VOLUME /data /tmp/app-data

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "run", "start:production"]
