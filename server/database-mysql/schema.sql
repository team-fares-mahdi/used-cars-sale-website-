CREATE DATABASE mvp2;

USE mvp2;
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mvp2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mvp2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mvp2` DEFAULT CHARACTER SET utf8 ;
USE `mvp2` ;

-- -----------------------------------------------------
-- Table `mvp2`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp2`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mvp2`.`Cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp2`.`Cars` (
  `idCars` INT NOT NULL AUTO_INCREMENT,
  `imageUrl` VARCHAR(500) NOT NULL,
  `brand` VARCHAR(45) NULL,
  `color` VARCHAR(45) NULL,
  `price` INT NULL,
  `PhoneNumber` INT NULL,
  `description` VARCHAR(500) NULL,
  `gearbox` VARCHAR(45) NULL,
  `fuel` VARCHAR(45) NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idCars`, `User_idUser`),
  INDEX `fk_Cars_User_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Cars_User`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mvp2`.`User` (`idUser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
