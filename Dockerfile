FROM node:slim AS development

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

EXPOSE 5174

CMD [ "npm", "run", "dev" ]


