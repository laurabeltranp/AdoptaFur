# Usa una imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Construye la aplicación React para producción
RUN npm run build

# Expone el puerto 3000 para acceder a la aplicación
EXPOSE 3000

# Inicia la aplicación React
CMD ["npm", "start"]
