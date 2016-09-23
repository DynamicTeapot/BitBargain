FROM node
MAINTAINER DynamicTeapots
RUN mkdir /public
ADD . /public
WORKDIR /public
RUN npm install

EXPOSE 9009
CMD ["nodemon", "server/server.js"]