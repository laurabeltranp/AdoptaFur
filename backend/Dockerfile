# Usa una imagen base de Maven para compilar el proyecto
FROM maven:3.9.6-eclipse-temurin-17 AS builder

# Establece el directorio de trabajo en /build
WORKDIR /build

# Copia el archivo pom.xml para descargar las dependencias
COPY pom.xml .

# Descarga las dependencias del proyecto
RUN mvn -B dependency:go-offline

# Copia el resto de los archivos del proyecto
COPY src src

# Compila el proyecto Spring Boot
RUN mvn -B package -DskipTests

# Usa una imagen base de OpenJDK 11
FROM eclipse-temurin:17

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el JAR construido desde el contenedor de compilación al contenedor final
COPY --from=builder /build/target/*.jar app.jar

# Expone el puerto en el que se ejecutará la aplicación Spring Boot
EXPOSE 8080

# Define la instrucción de ejecución de la aplicación Spring Boot
CMD ["java", "-jar", "app.jar"]
