CREATE DATABASE  IF NOT EXISTS `adoptafur`;
USE `adoptafur`;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`
(
    `idrol`  int NOT NULL AUTO_INCREMENT,
    `nombre` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`idrol`)
);

DROP TABLE IF EXISTS `mascotas`;
CREATE TABLE `mascotas`
(
    `idmascota`   int NOT NULL AUTO_INCREMENT,
    `estado`      bool         DEFAULT NULL,
    `cumpleanio`  date         DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL,
    `foto`        mediumblob,
    `nombre`      varchar(255) DEFAULT NULL,
    `peso`        float        DEFAULT NULL,
    `provincia`   varchar(255) DEFAULT NULL,
    `idraza`      int          DEFAULT NULL,
    `protectora`  varchar(255) DEFAULT NULL,
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
    `nombre`  varchar(255) DEFAULT NULL,
    `especie` enum('PERRO','GATO','PAJARO') NOT NULL,
    PRIMARY KEY (`idraza`)
);

DROP TABLE IF EXISTS `solicitud`;
CREATE TABLE `solicitud`
(
    `idsolicitud` int NOT NULL AUTO_INCREMENT,
    `alergias`    varchar(255) DEFAULT NULL,
    `estado`      tinyint      DEFAULT NULL,
    `familia`     varchar(255) DEFAULT NULL,
    `fecha`       datetime(6) DEFAULT NULL,
    `tipoHogar`   varchar(255) DEFAULT NULL,
    `idmascota`   int          DEFAULT NULL,
    `email`       varchar(255) DEFAULT NULL,
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
    `apellidos`   varchar(255) DEFAULT NULL,
    `cumpleanio`  date         DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL,
    `enabled`     boolean      DEFAULT NULL,
    `nombre`      varchar(255) DEFAULT NULL,
    `password`    varchar(255) DEFAULT NULL,
    `provincia`   varchar(255) DEFAULT NULL,
    `telefono`    varchar(255) DEFAULT NULL,
    `idrol`       int          DEFAULT NULL,
    PRIMARY KEY (`email`),
    KEY           `idrol_fk_index` (`idrol`),
    CONSTRAINT `idrol_fk` FOREIGN KEY (`idrol`) REFERENCES `roles` (`idrol`)
);

SET FOREIGN_KEY_CHECKS=1;