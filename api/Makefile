all: run

run:
	npm run start

node_modules: package.json
	npm install

setup: node_modules

test:
	npm test

clean:
	rm -rf node_modules
	rm -rf build
