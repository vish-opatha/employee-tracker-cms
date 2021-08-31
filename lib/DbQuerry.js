const mysql = require('mysql2');
const cTable = require('console.table');

class DbQuerry {
  constructor(){
    this.host = 'localhost';
    this.user = 'root';
    this.password = 'YJ3aXUd@2enSbF';
    this.database = 'employee_db';
    this.db = mysql.createConnection({
              host : this.host,
              user : this.user,
             password : this.password,
             database : this.database,
    })
  }

  // this.db =

  // openDatabase(){
  //   const db = mysql.createConnection({
  //              host : this.host,
  //      user : this.user,
  //            password : this.password,
  //            database : this.database,
  //     // 

  //   });
  //   return db;
  // }
 

  showAllEmployees(){
    this.db.query(`SELECT employee.id AS 'Id', 
    employee.first_name AS 'First Name', 
    employee.last_name AS 'Last Name', 
    emp_role.title AS 'Position', 
    department.department_name AS 'Department', 
    emp_role.salary AS 'Salary'
    FROM employee, emp_role, department 
    WHERE department.id = emp_role.id 
    AND emp_role.id = employee.role_id
    ORDER BY employee.id ASC`, function (err, results) {
      // const table = cTable.getTable(results);
      console.table(results);
    });
    this.db.end();
  }    
}

// SELECT Employee_id,Employee_name, Employee_DOB, Department_Name
// FROM #Departments INNER JOIN #Employees
//                 ON #Departments.Department_id = #Employees.Department_ID

module.exports = DbQuerry;



