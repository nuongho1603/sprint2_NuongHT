
CREATE DATABASE `sprint2`;

USE `sprint2`;

CREATE TABLE `sprint2`.`account` (
  `id_account` INT auto_increment NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `encrypt_password` VARCHAR(45) NOT NULL,
  `usename` VARCHAR(45) NOT NULL,
  `flag_delete` TINYINT NOT NULL,
  `avatar` VARCHAR(255) NOT NULL,
 `name` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(255) NOT NULL, 
  `phone` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_account`));
  
  CREATE TABLE `sprint2`.`role` (
  `id_role` INT auto_increment NOT NULL,
  `name_role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_role`));

CREATE TABLE  `sprint2`.`account_role` (
  `id_account_role` INT auto_increment NOT NULL,
  `id_role` INT,
  `id_account` INT,
  FOREIGN KEY(id_role) REFERENCES `role`(id_role),
  FOREIGN KEY(id_account) REFERENCES `account`(id_account),
  PRIMARY KEY (`id_account_role`));

  
  CREATE TABLE `sprint2`.`category` (
  `id_category` INT  auto_increment NOT NULL,
  `name_category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_category`));


  CREATE TABLE `sprint2`.`origin` (
  `id_origin` INT  auto_increment NOT NULL,
  `name_origin` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_origin`));
  
  CREATE TABLE `sprint2`.`product` (
  `id` INT  auto_increment NOT NULL,
    `code` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `name_product` VARCHAR(45) NOT NULL,
   `price` VARCHAR(45) NOT NULL,
  `origin` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
   `image` varchar(45),
  `promotional_price` VARCHAR(45) NOT NULL,
  `flag_delete` BIT,
  `id_category` int,
  `id_origin` int ,
  foreign key(`id_category`) references category(`id_category`),
  foreign key(`id_origin`) references origin(`id_origin`),
  PRIMARY KEY (`id`));
  
  CREATE TABLE `sprint2`.`order` (
  id_order INT auto_increment NOT NULL PRIMARY KEY,
  code_order varchar(45),
  day_order varchar(45),
  flag_delete BIT,
  id int,
  delivery_status varchar(45),
   `id_account` INT,
    foreign key(id_account) references `account`(id_account)
  );
  
  CREATE TABLE `sprint2`.`order_detail`(
  id_order_detail int auto_increment primary key,
  amount int,
  id int,
  id_order int,
  foreign key(`id`) references product(`id`),
  foreign key(`id_order`) references `order`(`id_order`)
  );
  
 