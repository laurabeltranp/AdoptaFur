# Proyecto AdoptaFur

## Estructura del Proyecto

El proyecto AdoptaFur está organizado en varias carpetas:

- `backend`: Contiene el proyecto backend desarrollado con Maven.
- `database`: Incluye los scripts iniciales de la base de datos. Si se utiliza Docker para el despliegue, aquí se persistirán los datos.
- `frontend`: Aquí se encuentra el proyecto de frontend desarrollado con NextJS.

## Preparación del Entorno

La aplicación web incluye una funcionalidad para enviar correos de dudas, consultas o incidencias a la empresa AdoptaFur a través de un formulario de contacto. Para que esta funcionalidad funcione, se necesita crear un archivo llamado `.env.local` en el directorio principal del proyecto `frontend` de AdoptaFur. Este archivo no se ha subido al repositorio de GitHub por razones de seguridad. Una vez creado, se debe introducir la siguiente información y guardar el archivo:

```properties
MAIL_TO=adoptafur.unir@gmail.com
MAIL_USERNAME=adoptafur.unir@gmail.com
MAIL_PASSWORD=*********
OAUTH_CLIENTID=*********
OAUTH_CLIENT_SECRET=*********
OAUTH_REFRESH_TOKEN=*********
```
## Arranque de la Aplicación Web

La aplicación se puede arrancar de dos formas diferentes: con soporte de Docker o en local instalando todas las dependencias. En ambos casos, la aplicación se sirve en el puerto 3000 y se puede acceder desde: [http://localhost:3000/](http://localhost:3000/)

### Modo 1: Despliegue con Docker

El único requisito es tener Docker instalado. Una vez instalado, ejecuta el siguiente comando para construir y levantar todos los servicios como contenedores de Docker:

```shell
docker compose up
```

Para apagar los contenedores, pulsa `Ctrl+c` en la terminal. Si deseas eliminar los contenedores de Docker, ejecuta:

```shell
docker compose down --remove-orphans
```

**Nota:** En este modo, la carpeta `./database/data` se utiliza como carpeta de persistencia de la base de datos. Si quieres eliminar la base de datos, también debes eliminar esta carpeta.

### Modo 2: Despliegue en Local

Para desplegar en local o de forma manual con el IDE, debes tener instalados los siguientes requisitos previos en tu máquina: Git, Node, JDK 17, MySQL. Además, es recomendable usar un IDE como IntelliJ. Si prefieres usar Eclipse, debes instalar manualmente las Tools de Spring y Lombok.

#### MySQL

Dentro de la carpeta `./database/init` hay scripts que debes ejecutar en orden en la base de datos para crear la base de datos, el esquema y los datos iniciales.

#### Backend

El backend está configurado con Maven y Spring Boot. Puedes levantarlo desde el IDE o utilizando el comando `mvn`:

```shell
./mvnw spring-boot
```

#### Frontend

Para el frontend, utiliza npm para levantarlo. Ejecuta los siguientes comandos:

```shell
npm install
```

Para descargar todas las dependencias del proyecto.

```shell
npm run build
```

Para compilar y construir el proyecto.

```shell
npm run start
```

Para levantar el servicio en modo "producción", con optimizaciones varias. Si prefieres levantarlo en modo desarrollo, ejecuta:

```shell
npm run dev
```