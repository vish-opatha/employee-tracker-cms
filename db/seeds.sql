USE employee_db;

INSERT INTO department (department_name) VALUES ("Administration"),("Academic");

INSERT INTO emp_role (title,salary,department_id) VALUES ("Senior Establishment Registrar",75000,1),("Head of Department",120000,2),("Senior Lecturer",100000,2),("Lecturer",95000,2),("Assistant Lecturer",70000,2),("Temporary Tutor",50000,2),("Demonstrator",35000,2),("Assistant Registrar",60000,1);

INSERT INTO employee (first_name,last_name,role_id) VALUES ("Keith","Seidel",2),("Ian","Harvey",3),("Sundar","Prakash",1),("June","Coxe",7),("Kate","Hendy",4),("Svetlana","Nick",6),("Sam","Amunugama",5);