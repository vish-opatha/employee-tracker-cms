// Linking the userPrompt
const inquirer = require("inquirer");
const querryHandler = require("./utility/dbQuerry");
const mainChoices = [ 'View all Employees', 'View all Roles', 'View all Departments', 'Add Employee',
                    'Update Employee Role', 'Add Role', 'Add Department', 'Exit'];

async function displayMainPrompts() {
    try {
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
            console.log("This is else");
            displaySecondaryPrompts(data.taskList);

        }
        // const themeSetup = await Promise.all ([
        // downloadFramework(answers.framework), // This task takes some time to run
        // installFramework(answers.framework),
        // changeThemeName(answers.themeName),
        // changeNamespace(answers.themeNamespace),
        // changeLocalUrl(answers.themeLocalUrl)
        // ])
        // console.log("Install successful! Run 'npm build' to get started."); // Only want this to happen after all of the above functions have finishjed
    } catch(error) {
        console.log("Error");
    }
};

// Display secondary prompts to the user
async function displaySecondaryPrompts(selection){
    switch (selection) {
        case 'View all Employees':
            console.log("Inside view all employees");
            var res =  querryHandler.showAllEmployees();
            console.log("");
            console.log(res);
            displayMainPrompts();
                    
            break;
        
        case 'View all Roles':
            querryHandler.viewAllRoles();
            displayMainPrompts();
        
            break;

        case 'View all Departments':
        
            break;

        case 'Add Employee':
        
            break;

        case 'Update Employee Role':
        
            break;

        case 'View all Employees':
        
            break;

        case 'Add Role':
        
            break;

        case 'Add Department':
        
            break;

    
        default:
            break;
    }

    //     if(task===this.q1){
    //         console.log(`View all employees`);
    //         const dbObj = new DbQuerry();
    //         dbObj.showAllEmployees();
    //         this.displayMainPrompts();         
    //     }

    //     else if(task===this.q2){
    //         this.addEmployeePrompts();
    //     }

    //     else if(task===this.q3){
    //         this.updateEmployeeRole();
    //     }

    //     else if(task===this.q5){
    //         this.addNewRole();
    //     }

    //     else if(task===this.q7){
    //         this.addNewDepartment();
    //     }

    //     else if(task===this.q7){
    //         this.addNewDepartment();
    //     }

    //     else{
    //         console.log(`These are the other tasks`);
    //     }
        
}

// Init function
function init (){
    displayMainPrompts();
}
 
init();