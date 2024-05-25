Write-Output "Purging database..."

# Detener y eliminar contenedores, redes, volúmenes e imágenes creadas por `docker-compose up`
docker compose down --remove-orphans

# Eliminar el directorio ./database/data y su contenido
Remove-Item -Recurse -Force .\database\data

Write-Output "Database purged."
