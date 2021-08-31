const inquirer = require("inquirer");
const querryHandler = require("./dbQuerry");

// class UserPrompt {
//     constructor (){
//         this.q1 = `View all employees`;
//         this.q2 = `Add employee`;
//         this.q2One = `What is the employee's first name?`;
//         this.q2Two = `What is the employee's last name?`;
//         this.q2Three = `What is the employee's role?`;
//         this.q2Four =`Who is employee's manager?`;

//         this.q3 = `Update employee role`;
//         this.q3One = `Which employee role do you want to update?`;
//         this.q3Two = `Which role do you want to assign to the selected employee?`;

//         this.q4 = `View all roles`;

//         this.q5 = `Add role`;
//         this.q5One = `What is the name of the role?`;
//         this.q5Two = `What is the salary of the role`;
//         this.q5Three = `Which department the role belongs to?`;

//         this.q6 = `View all departments`;
//         this.q7 = `Add department`;
//         this.q7_one =`What is the name of the department`;

//         this.q8 = `Quit`;
//     }

    // Function to display main prompts to the user
    function displayMainPrompts(){
        inquirer.prompt([
        {
            type: "list",
            name: "taskList",
            message: "What do you want to do?",
            choices: [
                'View all Employees',
                'View all Roles',
                'View all Departments',
                'Add Employee',
                'Update Employee Role',
                'Add Role',
                'Add Department',
                'Exit'],
        }]).then((data) => {
                if(data.taskList!='Exit'){
                    displaySecondaryPrompts(data.taskList);          
                } else{
                    console.log("Exit Employee Tracker!")
                    process.exit();
                }
        }).catch((e) =>
                    console.error(e)
            );
    }

    // displaySecondaryPrompts(task){
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
        
    // }

    // async addEmployeePrompts(){
    //     const data = await inquirer.prompt([
    //     { type: "input", name: "firstName", message: this.q2One,},
    //     { type: "input", name: "lastName", message: this.q2Two, },
    //     { type: "input", name: "empRole", message: this.q2Three,},
    //     { type: "input", name: "empMgr", message: this.q2Four,}])
        
    //     .then((data) => {
    //         console.log(data.firstName + data.lastName + data.empRole + data.Mgr);
    //         this.displayMainPrompts();
    //     }).catch((e) => console.log(e));
    // }

    // async updateEmployeeRole(){
    //     const data = await inquirer.prompt([
    //         { type: "input", name: "empName", message: this.q3One,},
    //         { type: "input", name: "updatedRole", message: this.q3Two, },
    //         ])
            
    //         .then((data) => {
    //             console.log(data.empName + data.updatedRole);
    //             this.displayMainPrompts();
    //         }).catch((e) => console.log(e));

    // }

    // async addNewRole(){
    //     const data = await inquirer.prompt([
    //         { type: "input", name: "roleTitle", message: this.q5One,},
    //         { type: "input", name: "salary", message: this.q5Two,},
    //         { type: "input", name: "department", message: this.q5Three,}
    //         ])
    //         .then((data) => {
    //             console.log(data.roleTitle + data.department);
    //             this.displayMainPrompts();
    //         }).catch((e) => console.log(e));        
    // }

    // async addNewDepartment(){
    //     const data = await inquirer.prompt([
    //         { type: "input", name: "depName", message: this.q7One,}])
    //         .then((data) => {
    //             console.log(data.depName);
    //             this.displayMainPrompts();
    //         }).catch((e) => console.log(e));        
    // }












// }

module.exports = userPrompt;