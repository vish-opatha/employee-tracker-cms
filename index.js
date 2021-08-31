// Linking the userPrompt
const inquirer = require("inquirer");
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
    
    if(data.taskList === `Exit`) {
        console.log(`Exiting the application!`);
        process.exit();
    }

    else {
        displaySecondaryPrompts(data.taskList);
    }
};





// Display secondary prompts to the user
function displaySecondaryPrompts(selection){
    switch (selection) {
        case 'View all Employees':
            showAllEmployees();        
            break;
        
        case 'View all Roles':
            querryHandler.viewAllRoles();
            displayMainPrompts();
            break;

        case 'View all Departments':
            querryHandler.viewAllDepartments();
            displayMainPrompts();
            break;

        case 'Add Employee':
            addEmployeePrompts();
        
            break;

        case 'Update Employee Role':
            displayMainPrompts();
            break;

        case 'View all Employees':
            displayMainPrompts();
            break;

        case 'Add Role':
            displayMainPrompts();
            break;

        case 'Add Department':
            displayMainPrompts();
        
            break;

    
        default:
            break;
    }
}


async function addEmployeePrompts(){
    const departments = querryHandler.viewAllDepartments();
    console.log(departments);
    const data = await inquirer.prompt([
    { type: "input", name: "firstName", message: `What is the employee's first name?`},
    { type: "input", name: "lastName", message: `What is the employee's last name?` },
    { type: "list", name: "empRole", message: `What is the employee's role?`, choices:['a','b']},
    { type: "input", name: "empMgr", message: `Who is employee's manager?`}])
}; 

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


// Init function
function init (){
    displayMainPrompts();
}
 
init();


