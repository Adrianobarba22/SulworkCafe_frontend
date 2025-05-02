FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Segunda etapa: servidor NGINX
FROM nginx:alpine
COPY --from=build /app/dist/sulwork-cafe-frontend /usr/share/nginx/html

# Remove configuração default do nginx e define a nossa
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
