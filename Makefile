.PHONY: deploy

deploy:
	test -d web || mkdir -p web
	cp -rf views/ ./web
	cp -rf static/ ./web
	tar -cjvf web-index.tar.bz2 web --remove-files

publish: deploy
	scp web-index.tar.bz2 root@47.104.251.44:/work/online/tag1801/clweb/
	ssh root@47.104.251.44 "cd /work/online/tag1801/clweb; tar -xjvf web-index.tar.bz2"