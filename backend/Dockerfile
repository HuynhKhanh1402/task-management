FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Create volume for uploads
VOLUME [ "/app/uploads" ]

EXPOSE 8000

CMD ["npm", "run", "dev"]
