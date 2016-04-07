all: buildfile builddocker

buildfile:
	webpack

builddocker:
	docker build -t wow_frontend_build:latest -f Dockerfile-build .

ID=$(shell docker images -q wow_frontend_build)

rundocker:
		docker run -d --name wow_frontend_build -it $(ID) bash

mv_frontend:
		docker cp wow_frontend_build:/usr/src/wow-frontend/dist .
build_frontend:
		docker build -t wow_frontend:latest .
tag_and_push_frontend:
		docker tag wow_frontend registry.management.stoica.xyz/wow_frontend
		docker push registry.management.stoica.xyz/wow_frontend

killdocker:
		docker stop wow_frontend_build
		docker rm wow_frontend_build

deploy_frontend: mv_frontend build_frontend tag_and_push_frontend

deploy: deploy_frontend

