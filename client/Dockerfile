FROM node:18.20.2
WORKDIR /clientApp
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
