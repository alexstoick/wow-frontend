all:
	buildfile builddocker

buildfile:
	webpack

builddocker:
	docker build -t wow_frontend:latest .
