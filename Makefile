deploy:
	cp -rf views/ ../tag1801/clweb/web
	cp -rf static/ ../tag1801/clweb/web


.PHONY: deploy

deploy:
	test -d web || mkdir -p web
	cp -rf views/ ./web
	cp -rf static/ ./web
	tar -czvf web-index.tar.gz web --remove-files