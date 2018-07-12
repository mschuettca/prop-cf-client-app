# base image
FROM node:8.11.1

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY public /usr/src/app/public/
COPY src /usr/src/app/src/
COPY *.json /usr/src/app/
RUN npm install
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]
