# Docker Compose Express+MongoDB API boilerplate
This is a simple boilerplate for helping you speed up Express+Mongo API env setup.

The project includes:
-  `docker-compose.yml` file for booting up a Node and MongoDB containers
-  a modified `Dockerfile` for installing packages and setting up ports for debugging
-  Nodemon to follow changes in projects
-  Logic to connect to DB
-  Example controllers for fetching data from MongoDB
-  `launch.json` for simple NodeJS debugging in VS Code

## How to run?
- Have Docker Compose installed
- Run `npm install`
- Run `docker-compose up`
- Project should be listening on port `2525`!

## How to debug(VS Code)?
- Set your breakpoints for debugging
- In Debugger tab, click "Attack to Docker".

## Endpoints available
- GET `http://localhost:2525/users`
- POST `http://localhost:2525/users`. Accepts JSON `{"name":"John Doe"}`
