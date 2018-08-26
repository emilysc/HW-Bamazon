CREATE DATABASE IF NOT EXISTS `bamazon`;

USE `bamazon`;

CREATE TABLE `bamazon`.`products` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(45) NOT NULL,
  `department_name` VARCHAR(45) NULL,
  `price` FLOAT NOT NULL DEFAULT 0.0,
  `stock_quantity` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`item_id`));

INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Apple', 'supermarket', '3.0', '999');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Orange', 'supermarket', '2.0', '400');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Chair', 'furniture', '100', '55');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Table', 'furniture', '300', '7');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('iphone', 'electronics', '899', '2');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('ipad', 'electronics', '799', '1');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('T-shirt', 'clothing', '100', '7');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('Shorts', 'clothing', '78', '90');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('iMac', 'electronics', '1399', '1');
INSERT INTO `bamazon`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('earphone', 'electronics', '100', '2');
