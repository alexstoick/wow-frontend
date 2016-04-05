all: buildfile builddocker

buildfile:
	webpack

builddocker:
	docker build -t wow_frontend_build:latest -f Dockerfile-build .

create_ca:
	sudo mkdir -p /etc/docker/certs.d/wow.stoica.xyz:5000
	sudo mv ca.crt /etc/docker/certs.d/wow.stoica.xyz:5000/ca.crt
	sudo cat /etc/docker/certs.d/wow.stoica.xyz:5000/ca.crt
	sudo service docker restart

ID=$(shell docker images -q wow_frontend_build)

rundocker:
		docker run -d --name wow_frontend_build -it $(ID) bash

mv_frontend:
		docker cp wow_frontend_build:/usr/src/wow-frontend/dist .
build_frontend:
		docker build -t wow_frontend:latest .
tag_and_push_frontend:
		docker tag wow_frontend wow.stoica.xyz:5000/wow_frontend
		docker push wow.stoica.xyz:5000/wow_frontend

killdocker:
		docker stop wow_frontend_build
		docker rm wow_frontend_build

deploy_frontend: mv_frontend build_frontend tag_and_push_frontend

deploy: deploy_frontend

