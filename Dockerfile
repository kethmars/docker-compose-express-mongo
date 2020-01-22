FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install
RUN npm install -g nodemon

COPY . /usr/src/app

EXPOSE 2525
EXPOSE 5858

CMD [ "npm", "run", "dev" ]
