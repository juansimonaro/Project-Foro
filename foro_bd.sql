CREATE DATABASE  IF NOT EXISTS `foro_bd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `foro_bd`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: foro_bd
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `publications`
--

DROP TABLE IF EXISTS `publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publications` (
  `id_publications` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `image` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_publications`),
  KEY `FK_publications_users` (`id_user`),
  CONSTRAINT `FK_publications_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publications`
--

LOCK TABLES `publications` WRITE;
/*!40000 ALTER TABLE `publications` DISABLE KEYS */;
INSERT INTO `publications` VALUES (1,'Características de la economía social','Su principio básico es ayudar a sus miembros y a la sociedad.\r\nPosee una autonomía de gestión en la que todos los miembros participan en la toma de decisiones y sin la intervención del estado.\r\nSe utilizan recursos endógenos (locales) en aquellos lugares que presentan problemas sociales, haciendo cada vez más fuerte la cohesión de la comunidad.\r\nEs democrática, cada persona representa su propio voto, permitiendo la libre expresión, participación y crea la pertenencia con el proyecto.','/images/imagen-1712630753867.jpeg',NULL,'2024-04-09 02:45:53'),(2,'Principios de la economía social','Responsabilidad individual: cada individuo es responsable individualmente de aportar su máximo de rendimiento a la colectividad, sin desconocer que no todos los seres humanos tienen las mismas habilidades ni condiciones iniciales por su educación, salud o riqueza.\r\nSolidaridad: cada individuo mediante el trabajo mancomunado debe contribuir con su capacidad intelectual, financiera y/o física para que la colectividad pueda funcionar.\r\nSubsidiariedad: el máximo órgano superior interviene cuando los entes inferiores no pueden solventarse con sus propios recursos.','/images/imagen-1712631065308.jpeg',NULL,'2024-04-09 02:51:05'),(3,'Tipos de economía social','Cooperativas: es una forma de agrupación colectiva que funcionan como colaboradores y administradores de la empresa.\r\nSociedades laborales: en este tipo de economía social, el capital de la organización pertenece a sus trabajadores. En general, todos los integrantes de la organización suelen ser socios.\r\nAsociaciones mutuales: grupo de personas que actúan basándose en la solidaridad y proporcionan ayuda mediante la prestación de servicios de seguridad social.\r\nEmpresas de inserción social: organizaciones que basan sus funciones en la lucha contra la desigualdad, la pobreza y la exclusión social.\r\nCentro de empleos: organizaciones que brindan espacios de trabajo para personas con diferentes discapacidades.\r\nFundaciones: organizaciones constituidas sin fines de lucro, las cuales buscan un interés general y colaborativo.','/images/imagen-1712631244581.jpeg',NULL,'2024-04-09 02:54:04');
/*!40000 ALTER TABLE `publications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `pass` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'david','correo@mail.com','123'),(19,'jason','jason@mail.com','$2a$08$66Suo2gg91AO8lLwj9iLfem9JxCAeNSoEUaXIG2vXb9nueJBaY2wq');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-09  4:45:12
