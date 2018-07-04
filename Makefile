build:
	docker build -t rdaneel/my-hyperapp:dev .

npmi:
	docker run -ti --rm -v $$(pwd)/:/ngapp rdaneel/my-hyperapp:dev npm i

run: build
	docker run -ti --rm -p 8081:8080 -v $$(pwd)/:/ngapp rdaneel/my-hyperapp:dev npm run serve

shell: build
	docker run -ti --rm -p 8081:8080 -v $$(pwd)/:/ngapp rdaneel/my-hyperapp:dev ash
