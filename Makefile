# Makefile for test_sonar_typescript

build:
	npm run build

test:
	npm test

coverage:
	npm run test:coverage

sonar:
	npm run sonar