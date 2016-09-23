FROM node
MAINTAINER DynamicTeapots
RUN mkdir /public
ADD . /
WORKDIR /server
RUN npm install
LABEL Description="File server for bitBargain" Version="0.1" 
ENTRYPOINT ["npm", "start"]

EXPOSE 9009
CMD ["nodemon", "server/server.js"]