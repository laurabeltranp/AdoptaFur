echo "Purging database..."

# Detener y eliminar contenedores, redes, volúmenes e imágenes creadas por `docker-compose up`
docker compose down --remove-orphans

# Eliminar el directorio ./database/data y su contenido
rm -rf ./database/data

echo "Database purged."
