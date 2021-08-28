const inquirer = require("inquirer");

// Choices for prompts
const q1 = `View all employees`;

const q2 = `Add employee`;
const q2One = `What is the employee's first name?`;
const q2Two = `What is the employee's last name?`;
const q2Three = `What is the employee's role?`;
const q2Four =`Who is employee's manager?`;

const q3 = `Update employee role`;
const q3One = `Which employee role do you want to updata?`;
const q4Two = `Which role do you want to assign to the selected employee?`;

const q4 = `View all roles`;

const q5 = `Add role`;
const q5One = `What is the name of the role?`;
const q5Two = `What is the salary of the role`;
const q5Three = `Which department the role belongs to?`;

const q6 = `View all departments`;
const q7 = `Add department`;
const q7_one =`What is the name of the department`;

const q8 = `Quit`;



const mainInterfacePrompts = () => {
    // console.log("What would you like to do?");
    employeeOperations();

    };




const asemployeeOperations = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'empQuestions',
        message: 'What do you want to do?',
        choices: [q1,q2,q3,q4,q5,q6,q7,q8],
    }]).then((answers)=>{
      promptSecondaryQuestions(answers.empQuestions);

      // if(answers.empQuestions == q2)
      // {
      //   new inquirer.prompt([{
      //     type: 'input',
      //   name: 'employeeName',
      //   message: 'What is your name?',


      //   }]).then((user)=>{

      //     console.log(user.employeeName);
      //   })
        
        
        
      //   ;
      // }

      // else{
      //   console.log("This is else");

      // }
      



    }).then(()=>{
      employeeOperations();
    });
  
  
  
  
  



  
  };
      // console.log(JSON.stringify(answers, null, '  '));
      // console.log(answers.empQuestions);
      // console.log("1 selection is made");
      
    


const promptSecondaryQuestions = (userChoice) => {
  switch (userChoice) {
    case q2: // Add a department
      new inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: `What is the employee's first name?`, // What is the name of the department?
        },
        {
            type: 'input',
            name: 'lastName',
            message: `What is the employee's last name?`, // What is the name of the department?
        },
      {
            type: 'input',
            name: 'lastName',
            message: `What is the employee's role?`,
      }]);   
      break;

      case q7:
      inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: q7_one,
        }]);   
      break;
  
    default:
      // console.log("Break");
      break;
  }

};




function init (){
  mainInterfacePrompts();
}

init();