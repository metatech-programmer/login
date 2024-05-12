# Utiliza una imagen base de Node.js 20 con Alpine Linux
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el código fuente
COPY . .

# Compila el código TypeScript (si corresponde)
RUN npm run build

# Expone el puerto en el que se ejecutará el backend
EXPOSE 3000

# Comando para iniciar el backend
CMD ["npm", "start"]
