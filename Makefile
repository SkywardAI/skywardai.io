.PHONY: install
install:
	@bundle install

.PHONY: run
run: install
	@bundle exec jekyll serve