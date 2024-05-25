Write-Output "Starting services..."

# Ejecuta el script purge_database
& .\purge_database.ps1

# Construye las imágenes de Docker sin usar la caché
docker compose build --no-cache

# Levanta los servicios de Docker
docker compose up
