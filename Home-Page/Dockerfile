FROM node:16 as build

COPY . /build
WORKDIR /build

RUN npm install
RUN npm run build

FROM nginx:alpine as serve

COPY --from=build /build/dist/home-page /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80