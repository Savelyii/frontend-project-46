install:
	npm ci

publish:
	npm publish --dry-run	

make lint:
	npx eslint .

gendiff:
	node bin/gendiff.js

dev: 
	gendiff file1.json file2.json

watch:
	npx nodemon src/index.js

test:
	npm test