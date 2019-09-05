FROM node:12.7.0-alpine as STAGE1
MAINTAINER arunstiwari@gmail.com
WORKDIR app
COPY package.json /app/.
COPY public /app/public
COPY src  /app/src
RUN  npm install -g react-scripts

RUN (cd /app && npm install && npm run build)


FROM nginx:1.15
COPY --from=STAGE1 /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
