const UserPrompt = require("../lib/UserPrompt");

const userPrompt = new UserPrompt();
console.log(userPrompt.q1);

userPrompt.displayMainPrompts();




function init (){
  mainInterfacePrompts();
}

init();