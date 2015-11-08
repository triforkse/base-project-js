.git/hooks/pre-commit:
	cp config/hooks/* .git/hooks/

git-hooks: .git/hooks/pre-commit

setup: git-hooks
	cd api && $(MAKE) setup
	cd client && $(MAKE) setup
	cd e2e && $(MAKE) setup

.PHONY: git-hooks setup
