all: run

setup:
	cp config/hooks/* .git/hooks/
	npm install

run:
	npm run start

test:
	npm test

docker-run:
	docker-compose build && docker-compose up

.PHONY: test run setup
