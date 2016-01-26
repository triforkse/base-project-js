all: run

node_modules: package.json
	npm install

setup: node_modules

build:
	npm run build

run:
	npm run start

test:
	npm test

clean:
	-rm -rf node_modules
	-rm -rf build

serve:
	$(MAKE) build
	cp -R public/ build/
	npm run start:production

.PHONY: clean test run build setup
