SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
SET collation_connection = 'utf8mb4_unicode_ci';

CREATE DATABASE  IF NOT EXISTS `adoptafur`;
USE `adoptafur`;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`
(
    `idrol`  int NOT NULL AUTO_INCREMENT,
    `nombre` varchar(255) NOT NULL,
    PRIMARY KEY (`idrol`)
);

DROP TABLE IF EXISTS `mascotas`;
CREATE TABLE `mascotas`
(
    `idmascota`   int NOT NULL AUTO_INCREMENT,
    `estado`      enum('DISPONIBLE','BLOQUEADA', 'ADOPTADA') NOT NULL,
    `cumpleanio`  date         NOT NULL,
    `description` varchar(255) NOT NULL,
    `foto`        mediumblob,
    `nombre`      varchar(255) NOT NULL,
    `peso`        float        NOT NULL,
    `provincia`   varchar(255) NOT NULL,
    `idraza`      int          NOT NULL,
    `protectora`  varchar(255) NOT NULL,
    `fechaalta`  datetime         NOT NULL,

    PRIMARY KEY (`idmascota`),
    KEY           `idraza_fk_index` (`idraza`),
    KEY           `protectora_fk_index` (`protectora`),
    CONSTRAINT `protectora_fk` FOREIGN KEY (`protectora`) REFERENCES `usuarios` (`email`),
    CONSTRAINT `idraza_fk` FOREIGN KEY (`idraza`) REFERENCES `razas` (`idraza`)
);

DROP TABLE IF EXISTS `razas`;
CREATE TABLE `razas`
(
    `idraza`  int NOT NULL AUTO_INCREMENT,
    `nombre`  varchar(255) NOT NULL,
    `especie` enum('PERRO','GATO','PAJARO') NOT NULL,
    PRIMARY KEY (`idraza`)
);

DROP TABLE IF EXISTS `solicitud`;
CREATE TABLE `solicitud`
(
    `idsolicitud` int NOT NULL AUTO_INCREMENT,
    `alergias`    varchar(255) NOT NULL,
    `estado`      enum('PENDIENTE','ACEPTADA','RECHAZADA', 'CANCELADA') NOT NULL,
    `familia`     varchar(255) DEFAULT NULL,
    `fecha`       datetime(6) NOT NULL,
    `tipoHogar`   varchar(255) NOT NULL,
    `idmascota`   int          NOT NULL,
    `email`       varchar(255) NOT NULL,
    PRIMARY KEY (`idsolicitud`),
    KEY           `idmascota_fk_index` (`idmascota`),
    KEY           `email_fk_index` (`email`),
    CONSTRAINT `email_fk` FOREIGN KEY (`email`) REFERENCES `usuarios` (`email`),
    CONSTRAINT `idmascota_fk` FOREIGN KEY (`idmascota`) REFERENCES `mascotas` (`idmascota`)
);

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`
(
    `email`       varchar(255) NOT NULL,
    `apellidos`   varchar(255) NOT NULL,
    `cumpleanio`  date         NOT NULL,
    `description` varchar(255) DEFAULT NULL,
    `enabled`     boolean      DEFAULT true,
    `nombre`      varchar(255) NOT NULL,
    `password`    varchar(255) NOT NULL,
    `provincia`   varchar(255) NOT NULL,
    `telefono`    varchar(255) DEFAULT NULL,
    `idrol`       int          NOT NULL,
    PRIMARY KEY (`email`),
    KEY           `idrol_fk_index` (`idrol`),
    CONSTRAINT `idrol_fk` FOREIGN KEY (`idrol`) REFERENCES `roles` (`idrol`)
);

SET FOREIGN_KEY_CHECKS=1;