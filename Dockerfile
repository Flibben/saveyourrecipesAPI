FROM node:20
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run", "dev" ]
EXPOSE 3000