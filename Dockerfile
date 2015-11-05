FROM node:5.0

ADD . /app
VOLUME /data /tmp/app-data

EXPOSE 3000

WORKDIR /app

ENV NODE_ENV=production

CMD ["npm", "run", "start:production"]
