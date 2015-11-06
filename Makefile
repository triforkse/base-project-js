APP_NAME=app
CONCURRENT=./api/node_modules/.bin/concurrent

all: run

clean:
	rm -rf client/build
	rm -rf client/node_modules
	rm -rf api/build
	rm -rf api/node_modules

api/node_modules: api/package.json
	cd api && npm install

client/node_modules: client/package.json
	cd client && npm install

.git/hooks/pre-commit: config/hooks/pre-commit
	cp config/hooks/* .git/hooks/

setup: client/node_modules api/node_modules .git/hooks/pre-commit

run-api:
	cd api && npm run start

run-client:
	cd client && npm run start

test:
	npm test

api/build/app.js: $(wildcard api/src/*) api/package.json $(wildcard api/public/*)
	cd api && npm run build
	cp api/public/ api/build

build-api: api/build/app.js

client/build/app.js: $(wildcard client/src/*) $(wildcard api/webpack.*) client/package.json
	cd client && npm run build

build-client: client/build/app.js

build: setup build-api build-client

docker-run: build
	docker-compose --project-name=$(APP_NAME) build
	docker-compose --project-name=$(APP_NAME) up

.PHONY: test run setup build clean build-client build-api docker-run
