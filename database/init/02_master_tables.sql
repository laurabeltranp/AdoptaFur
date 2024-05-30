SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
SET collation_connection = 'utf8mb4_unicode_ci';

USE `adoptafur`;

INSERT INTO `razas`
VALUES (1, 'Bulldog Francés', 'PERRO'),
       (2, 'Pastor Alemán', 'PERRO'),
       (3, 'Labrador Retriever', 'PERRO'),
       (4, 'Persa', 'GATO'),
       (5, 'Siamés', 'GATO'),
       (6, 'Bengala', 'GATO'),
       (7, 'Canario', 'PAJARO'),
       (8, 'Periquito', 'PAJARO'),
       (9, 'Cacatúa', 'PAJARO'),
       (10, 'Golden Retriever', 'PERRO'),
       (11, 'Poodle', 'PERRO'),
       (12, 'Beagle', 'PERRO'),
       (13, 'Chihuahua', 'PERRO'),
       (14, 'Yorkshire Terrier', 'PERRO'),
       (15, 'Boxer', 'PERRO'),
       (16, 'Dachshund', 'PERRO'),
       (17, 'Mestiza', 'PERRO'),
       (18, 'Otras', 'PERRO'),
       (19, 'Maine Coon', 'GATO'),
       (20, 'Ragdoll', 'GATO'),
       (21, 'Sphynx', 'GATO'),
       (22, 'Británico de Pelo Corto', 'GATO'),
       (23, 'Abisinio', 'GATO'),
       (24, 'Birmano', 'GATO'),
       (25, 'Scottish Fold', 'GATO'),
       (26, 'Mestiza', 'GATO'),
       (27, 'Otras', 'GATO'),
       (28, 'Diamante Mandarín', 'PAJARO'),
       (29, 'Jilguero', 'PAJARO'),
       (30, 'Agapornis', 'PAJARO'),
       (31, 'Ninfa', 'PAJARO'),
       (32, 'Loro Gris', 'PAJARO'),
       (33, 'Guacamayo', 'PAJARO'),
       (34, 'Cotorra', 'PAJARO'),
       (35, 'Mestiza', 'PAJARO'),
       (36, 'Otras', 'PAJARO');

INSERT INTO `roles`
VALUES (1, 'Usuario'),
       (2, 'Protectora');
