const mysql = require('mysql2');
const cTable = require('console.table');

function showAllEmployees(){
    const db =  mysql.createConnection(
    {
          host: 'localhost',
          // MySQL username,
          user: 'root',
          // TODO: Add MySQL password here
          password: 'YJ3aXUd@2enSbF',
          database: 'employee_db'
    });


    const sql = `SELECT employee.id AS 'Id', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', 
                emp_role.title AS 'Position', department.department_name AS 'Department', 
                emp_role.salary AS 'Salary' FROM employee, emp_role, department WHERE department.id = emp_role.id 
                AND emp_role.id = employee.role_id ORDER BY employee.id ASC`;

    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
        
    console.table(result);
    });
    db.end();
}

function viewAllRoles(){
    const db =  mysql.createConnection(
    {
          host: 'localhost',
          // MySQL username,
          user: 'root',
          // TODO: Add MySQL password here
          password: 'YJ3aXUd@2enSbF',
          database: 'employee_db'
    });


    const sql = `SELECT emp_role.id, emp_role.title, emp_role.salary, department.department_name AS department
                    FROM emp_role
    LEFT JOIN department ON emp_role.department_id = department.id
    ORDER BY emp_role.id`;

    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
        
    console.table(result);
    });
    db.end();
}



module.exports = {showAllEmployees, viewAllRoles};

// const mysql = require('mysql2/promise'); // or require('mysql2').createConnectionPromise
// mysql.createConnection({ /* same parameters as for non-promise createConnection */ })
//   .then(conn => conn.query('select foo from bar'))
//   .then(([rows, fields]) => console.log(rows[0].foo));
// const pool = require('mysql2/promise').createPool({}); // or require('mysql2').createPoolPromise({}) or require('mysql2').createPool({}).promise()
// pool.getConnection()
//   .then(conn => {
//     const res = conn.query('select foo from bar');
//     conn.release();
//     return res;
//   }).then(result => {
//     console.log(result[0][0].foo);
//   }).catch(err => {
//     console.log(err); // any of connection time or query time errors from above
//   });

