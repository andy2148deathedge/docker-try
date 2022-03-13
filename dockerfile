FROM node:16

ADD . /docker-try
WORKDIR /docker-try
RUN npm install

CMD npm run dev