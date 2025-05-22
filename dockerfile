# Étape 1 : build Angular app
FROM node:23-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

# Étape 2 : servir via Nginx
FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html/
