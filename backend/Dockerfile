FROM node:10.16.0-stretch

ENV APP_DIR /app

RUN mkdir $APP_DIR

WORKDIR $APP_DIR

COPY package.json yarn.lock $APP_DIR/

RUN yarn install --pure-lockfile

COPY . $APP_DIR