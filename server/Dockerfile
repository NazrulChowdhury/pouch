FROM node:18.20.2
WORKDIR /serverApp
COPY package*.json .
# Debugging information
RUN pwd && ls -al
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]
EXPOSE 8080