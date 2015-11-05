FROM ubuntu:precise

apt-get update && apt-get -y install node

ADD /dist /app
VOLUME /data

WORKDIR /app

ENV NODE_ENV=production

CMD ["node app.js"]
