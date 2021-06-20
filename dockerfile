FROM node:latest as build

ARG configuration=""
ARG port=80

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list
RUN apt-get update && apt-get install -y google-chrome-stable xvfb

RUN yarn install
RUN yarn test:"$configuration"
RUN yarn build:node --c=$configuration

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/dist/shopping-card /usr/share/nginx/html

EXPOSE $port