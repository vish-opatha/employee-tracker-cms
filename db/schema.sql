DROP DATABASE IF EXISTS ;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT, 
  department_name VARCHAR(30) NOT NULL, 
  PRIMARY KEY (id));

alter table department AUTO_INCREMENT=1;

CREATE TABLE emp_role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

alter table emp_role AUTO_INCREMENT=1;

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL, 
  role_id INT,
  mgr_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (role_id)
  REFERENCES emp_role(id)
);

alter table employee AUTO_INCREMENT=1; 
ALTER TABLE employee ADD FOREIGN KEY(mgr_id) REFERENCES employee(id);
