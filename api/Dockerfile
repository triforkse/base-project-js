FROM node:5.0

ENV NODE_ENV=production

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir /app && cp -a /tmp/node_modules /app/

ADD . /app

WORKDIR /app

RUN npm run build

VOLUME /data /tmp/app-data

EXPOSE 3000

CMD ["npm", "run", "start:production"]
