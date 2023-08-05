FROM node:18-alpine3.17

RUN mkdir -p /usr/local/apps/node-app/dev

WORKDIR /usr/local/apps/node-app/dev

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080

ENTRYPOINT ["npm", "start"]
