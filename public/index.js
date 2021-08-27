const inquirer = require("inquirer");

// Choices for prompts
const q1 = `View all employees`;
const q2 = `Update employee role`;
const q3 = `View all roles`;
const q4 = `Add role`;
const q5 = `View all departments`;
const q6 = `Add a department`;

const q6_one =`What is the name of the department`;

const mainInterfacePrompts = () => {
    console.log("What would you like to do?");
    employeeOperations();

    };




const employeeOperations = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'empQuestions',
        message: 'What do you want to do?',
        choices: [q1,q2,q3,q4,q5,q6],
      //   new inquirer.Separator(),
      //   'Ask for opening hours',
      //   {
      //     name: 'Contact support',
      //     disabled: 'Unavailable at this time',
      //   },
      //   'Talk to the receptionist',
      // ],
    },]).then((answers) => {
      promptSecondaryQuestions(answers.empQuestions);
      }).then(()=>{
        employeeOperations();
      });
      // console.log(JSON.stringify(answers, null, '  '));
      // console.log(answers.empQuestions);
      // console.log("1 selection is made");
      
    };


const promptSecondaryQuestions = (userChoice) => {
  switch (userChoice) {
    case q6:
      inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: q6_one,
           
          //   new inquirer.Separator(),
          //   'Ask for opening hours',
          //   {
          //     name: 'Contact support',
          //     disabled: 'Unavailable at this time',
          //   },
          //   'Talk to the receptionist',
          // ],
        },]).then((answers) =>{
            console.log(answers);
        });

      
      break;
  
    default:
      console.log("Break");
      break;
  }

};




function init (){
  mainInterfacePrompts();
}

init();