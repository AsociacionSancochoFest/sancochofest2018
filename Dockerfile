FROM node:8.0.0

RUN \
  curl -o- -L https://yarnpkg.com/install.sh | bash

EXPOSE 3000
