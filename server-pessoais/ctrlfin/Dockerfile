FROM node:10.24.1-buster-slim

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY . .

EXPOSE 21032

CMD ["npm", "start"]
