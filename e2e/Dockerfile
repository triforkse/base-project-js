FROM node:5.0

ENV NODE_ENV=production

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir /app && cp -a /tmp/node_modules /app/

ADD . /app

WORKDIR /app

CMD ["./scripts/run.sh"]
