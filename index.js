// Linking the userPrompt
const inquirer = require("inquirer");
const cTable = require('console.table');
const querryHandler = require("./utility/dbQuery");
const mainChoices = [ 'View all Employees', 'View all Roles', 'View all Departments', 'Add Employee',
                    'Update Employee Role', 'Add Role', 'Add Department', 'Exit'];
const db = require('./db/connection');


// Display main user prompts to the user
async function displayMainPrompts() {
    const data = await inquirer.prompt([
    {
        type: "list",
        name: "taskList",
        message: "What do you want to do?",
        choices: mainChoices,
    }]);
    
    // if(data.taskList === `Exit`) {
    //     console.log(`Exiting the application!`);
    //     process.exit();
    // }

    // else {
        displaySecondaryPrompts(data.taskList);
    // }
};

// Display secondary prompts to the user
function displaySecondaryPrompts(selection){
    switch (selection) {
        case 'View all Employees':
            showAllEmployees();        
            break;
        
        case 'View all Roles':
            viewAllRoles();
            break;

        case 'View all Departments':
            viewAllDepartments();
            
            break;

        case 'Add Employee':
            // addEmployeePrompts();
            const a = getExistingValues('department');
            console.log(a);
        
            break;

        case 'Update Employee Role':
            
            break;


        case 'Add Role':
            
            break;

        case 'Add Department':
            addNewDepartment();
            
        
            break;

        case 'Exit':
            console.log(`Exiting the application!`);
            process.exit();
        
    
            break;
    
        default:
            console.log(`Exiting the application!`);
            process.exit();
            break;
    }
}

async function addNewDepartment(){
    const data = await inquirer.prompt
    ([{ type: "input", name: "departmentName", message: `What is the name of the department?`}]);

    const sql = `INSERT INTO department (department_name) VALUES (?)`;

    const param = data.departmentName;

    db.query(sql, param, (err, result) => {
        if (err) {
            console.log(err);
          
          
        }

        console.log("New department is created!");
        displayMainPrompts();
    
    
    });
       

}

async function addNewRole(){
    


}


// async function addEmployeePrompts(){
//     const departments = viewAllDepartments();
//     console.log(departments);
//     const data = await inquirer.prompt([
//     { type: "input", name: "firstName", message: `What is the employee's first name?`},
//     { type: "input", name: "lastName", message: `What is the employee's last name?` },
//     { type: "list", name: "empRole", message: `What is the employee's role?`, choices:['a','b']},
//     { type: "input", name: "empMgr", message: `Who is employee's manager?`}])
// }; 

function showAllEmployees(){
    console.log("Show employees");
     const sql = `SELECT employee.id AS 'Id', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', 
                emp_role.title AS 'Position', department.department_name AS 'Department', 
                emp_role.salary AS 'Salary' FROM employee, emp_role, department WHERE department.id = emp_role.id 
                AND emp_role.id = employee.role_id ORDER BY employee.id ASC`;
    
    db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
    }
    
    console.table(result);
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
    var a = result.map(b=> b.title);
    const data = inquirer.prompt([
        {
            type: "list",
            name: "taskList",
            message: "What do you want to do?",
            choices: a,
        }]);
    // console.log(a)
    // console.log();
    // displayMainPrompts();
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

// function viewAllDepartments() {
// try{
//   const [rows,fields] = db.promise().query(`SELECT id, department_name AS 'Name' FROM department`);
//   console.table (rows);
// }
// catch(e){
//     console.log(e);
// }
//     // db.promise().query(`SELECT id, department_name AS 'Name' FROM department`)
//     //   .then( ([rows,fields]) => {
//     //     console.table(rows);
//     //   })
//     //   .catch(console.log)
//     //   .then( () => db.end());
//   }

// async function getExistingValues(table)
// {

//     if (table === 'department')
//     {
//         const sql = `SELECT id, department_name AS 'Name' FROM department`;
    
//         db.query(sql, (err, result) => {
//         if (err) {
//             console.error(err);
//         }
//         return result;
//     }
    



// Init function
function init (){
    displayMainPrompts();
}
 
init();


