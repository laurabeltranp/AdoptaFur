echo "Starting services..."

# Ejecuta el script purge_database.sh
sh purge_database.sh

# Construye las imágenes de Docker sin usar la caché
docker compose build --no-cache

# Levanta los servicios de Docker
docker compose up
