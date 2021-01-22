DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(80),

PRIMARY KEY(id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL(10, 4),
department_id INTEGER,
FOREIGN KEY(department_id) REFERENCES department(id),
PRIMARY KEY(id)
);

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
FOREIGN KEY(role_id) REFERENCES role(id),
PRIMARY KEY(id)
);

INSERT INTO department (name)
VALUES ("Warehouse");
INSERT INTO department (name)
VALUES ("Cusotmer Service");
INSERT INTO department (name)
VALUES ("Produce");

INSERT INTO role (title, salary, department_id)
VALUES ("Cashier", 25000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Head Cashier", 27000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Greeter", 20000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Store Manager", 67000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Stocker", 25000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Keyholder", 31000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Assistant Manager", 45000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Produce Stocker", 25000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Produce Lead", 27000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Produce Rotator", 25000, 3);


INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Eleana", "May", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jessica", "De Leon", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Amber", "Gomez", 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Roman", "Rangel", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Alejandra", "Lopez", 5);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Linda", "Ratsabouth", 6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Daryl", "Portwood", 7);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Whitney", "Folk", 8);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Gloria", "Reyes", 9);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kim", "Possible", 10);