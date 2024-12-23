FROM node:21.5.0-bullseye
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]