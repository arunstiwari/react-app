ARG TAG=17.5.0-alpine
FROM node:$TAG as STAGE1
MAINTAINER arunstiwari@gmail.com
WORKDIR app
COPY package.json .
COPY public public
COPY src  src

RUN npm install && npm run build

FROM nginx:1.17.1-alpine
COPY --from=stage1 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g", "daemon off;"]

# Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
