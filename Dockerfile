FROM node:12

WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]