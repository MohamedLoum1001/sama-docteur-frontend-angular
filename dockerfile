# Étape 1 : Build de l'application Angular
FROM node:23-alpine AS build

# Créer un dossier de travail
WORKDIR /app

# Copier les fichiers Angular
COPY package*.json ./
RUN npm install
COPY . .

# Générer les fichiers Angular optimisés
RUN npm run build --prod

# Étape 2 : NGINX pour servir l'application Angular
FROM nginx:alpine

# Copier les fichiers compilés vers le répertoire de déploiement NGINX
COPY --from=build /app/dist/samadocteur-frontend /usr/share/nginx/html

# Supprimer la config par défaut de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Ajouter une config nginx pour Angular SPA
COPY nginx.conf /etc/nginx/conf.d

# Exposer le port HTTP
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
