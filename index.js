// Linking the required modules and packages
const inquirer = require("inquirer");
const cTable = require('console.table');
const db = require('./db/connection');

// Variable declaration
const mainChoices = [ 'View all Employees', 'View all Roles', 'View all Departments', 'Add Employee',
                    'Update Employee Role', 'Add Role', 'Add Department', 'Exit'];


// ####### Display main user prompts to the user #############
// ############################################################
async function displayMainPrompts() {
    try{
        const data = await inquirer.prompt([
        { type: "list", name: "taskList", message: "What do you want to do?", choices: mainChoices, }]);
        
        displaySecondaryPrompts(data.taskList);
    }

    catch(e){
        console.error(e);
    }
};

// ####### Display secondary prompts to the user ##############
// ############################################################
function displaySecondaryPrompts(selection){
    switch (selection) {
        case 'View all Employees':
            viewAllEmployees();        
            break;
        
        case 'View all Roles':
            viewAllRoles();
            break;

        case 'View all Departments':
            viewAllDepartments();
            break;

        case 'Add Employee':
            addNewEmployee();
            break;

        case 'Update Employee Role':
            updateEmpRole()
            break;

        case 'Add Role':
            addNewRole();
            break;

        case 'Add Department':
            addNewDepartment();
            break;
    
        default:
            console.log(`Exiting the application!`);
            db.end();
            process.exit();
            break;
    }
}

// ####### Functions to add employee, role and department #####
// ############################################################

async function addNewDepartment(){
    const data = await inquirer.prompt
    ([{ type: "input", name: "departmentName", message: `What is the name of the department?`,
    validate(value) {
        const pass = value.match(/^[a-zA-Z]+$/);
        if (pass) {
          return true;
        }
        return `Please enter department name`;
       },}]);

    const sql = `INSERT INTO department (department_name) VALUES (?)`;
    const param = data.departmentName;

    db.query(sql, param, (err, result) => {
        if (err) {
            console.log(err); 
        }

        console.log("New department is created!");
        console.log();
        displayMainPrompts();
    });
}

async function addNewRole()
{
    try{
    const data = await inquirer.prompt([
        { type: "input", name: "title", message: `What is the name of the role?`,},
        { type: "input", name: "salary", message: `What is the salary of the role?`},
        { type: "input", name: "departmentId", message: `Which department does the role belong to?`},
    ]);

    const sql = `INSERT INTO emp_role (title,salary,department_id) VALUES (?,?,?)`;

    const param = [data.title,data.salary,data.departmentId];

    db.query(sql, param, (err, result) => {
        if (err) {
            console.log(err);
          
        }

        console.log("New role is created!");
        console.log("");
        displayMainPrompts();
    });
    }
    catch(e){
        console.error(e);
    }
}

async function addNewEmployee()
{
    try{
    const data = await inquirer.prompt([
        { type: "input", name: "firstName", message: `What is the first name of the employee?`},
        { type: "input", name: "lastName", message: `What is the last name of the employee?`},
        { type: "input", name: "empRole", message: `What is the employee role?`},
        { type: "input", name: "empMgr", message: `Who is the employee manager?`},
    ]);

    const sql = `INSERT INTO employee (first_name,last_name,role_id,mgr_id) VALUES (?,?,?,?)`;
    const param = [data.firstName,data.lastName,data.empRole,data.empMgr];

    db.query(sql, param, (err, result) => {
        if (err) {
            console.log(err);  
        }

        console.log("New employee is added!");
        console.log("");
        displayMainPrompts();
    });
    }
    catch(e){
        console.error(e);
    }
}

// ####### Functions to update employee role ##################
// ############################################################

async function updateEmpRole(){
    const data = await inquirer.prompt([
        { type: "input", name: "employeeID", message: `Which employee's role do you want to update?`},
        { type: "input", name: "newRole", message: `Which role do you want to assign?`},
    ]);

    const sql = `UPDATE employee SET role_id = ${data.newRole} WHERE id= ${data.employeeID}`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);  
        }

        console.log("Employee role is updated!");
        console.log("");
        displayMainPrompts();
    });
}

// ############### Functions to select data ##################
// ############################################################

function viewAllEmployees(){
    const sql = `SELECT employee.id AS id, employee.first_name, employee.last_name, emp_role.title, department.department_name AS department, emp_role.salary AS salary FROM employee INNER JOIN emp_role ON employee.role_id = emp_role.id INNER JOIN department ON emp_role.department_id = department.id ORDER BY employee.id`;
    
    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
    
    console.table(result);
    console.log();
    displayMainPrompts();
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
    
    console.log("");
    displayMainPrompts();
    }); 
}

function viewAllDepartments(){
    const sql = `SELECT id, department_name AS 'Name' FROM department`;
    
    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
        
    console.table(result);
    console.log("");
    displayMainPrompts();
    });
}

// Init function
function init (){
    displayMainPrompts();
}
 
init();


