FROM node:18-alpine

WORKDIR /app

# Install system dependencies for sharp (image processing)
RUN apk add --no-cache python3 make g++

COPY package*.json ./

RUN npm install

COPY . .

# Create uploads directory and set permissions
RUN mkdir -p /app/uploads && chmod 777 /app/uploads

EXPOSE 8000

CMD ["npm", "run", "dev"]
