const mysql = require('mysql2');
const cTable = require('console.table');
const db = require('../db/connection');



// showAllEmployees();

function showAllEmployees(){
    console.log("Show employees");
     const sql = `SELECT employee.id AS 'Id', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', 
                emp_role.title AS 'Position', department.department_name AS 'Department', 
                emp_role.salary AS 'Salary' FROM employee, emp_role, department WHERE department.id = emp_role.id 
                AND emp_role.id = employee.role_id ORDER BY employee.id ASC`;
    // db.query(sql)
    
    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
    
    console.table(result);
    
    });
    
}

function viewAllRoles(){
    
    const sql = `SELECT emp_role.id, emp_role.title, emp_role.salary, department.department_name AS department
                 FROM emp_role LEFT JOIN department ON emp_role.department_id = department.id ORDER BY emp_role.id ASC`;

    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
  
    console.table(result);
    });
   
}

function viewAllDepartments(){
    
    const sql = `SELECT id, department_name AS 'Name' FROM department`;
    
    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
        
    console.table(result);
    });
    db.end();
}

function addNewEmployee(){
    
    // const sql = `INSERT INTO employee(first)`;
    
    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
        
    console.table(result);
    });
    db.end();
}



module.exports = {showAllEmployees, viewAllRoles, viewAllDepartments};


