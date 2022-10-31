FROM node:16.16.0

WORKDIR /HOMEWORK-infra-master

COPY . .

RUN npm ci

RUN npm run build

CMD npm start