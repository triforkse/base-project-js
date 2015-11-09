.git/hooks/pre-commit:
	cp config/hooks/* .git/hooks/

git-hooks: .git/hooks/pre-commit

setup: git-hooks
	cd api && $(MAKE) setup
	cd client && $(MAKE) setup
	cd e2e && $(MAKE) setup

lint:
	cd client && npm run lint
	cd api && npm run lint

test-unit:
	cd client && npm run test:unit
	cd api && npm run test:unit

test-integration:
	cd client && npm run test:integration
	cd api && npm run test:integration

test-e2e:
	cd e2e && npm test

docker-e2e:
	docker-compose --project-name=app build
	docker-compose --project-name=app run e2e

.PHONY: git-hooks setup
