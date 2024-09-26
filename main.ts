#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "ENTER FIRST NUMBER", type: "number", name: "firstNumber" },
  { message: "ENTER SECOND NUMBER", type: "number", name: "secondNumber" },
  {
    message: "SELECT ONE OF THE OPERATOR TO PERFORM OPERATION",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "divison"],
  },
]);
//conditional statment
if(answer.operator==="addition"){
console.log("your value is ", answer.firstNumber + answer.secondNumber)
}
else if(answer.operator==="subtraction"){
  console.log("your value is ", answer.firstNumber - answer.secondNumber)
}
  else if(answer.operator==="multiplication"){
    console.log("your value is ", answer.firstNumber * answer.secondNumber)
    }
    else if(answer.operator==="divison"){
      console.log("your value is ", answer.firstNumber / answer.secondNumber)
      }
      else{console.log("SELECT VALID OPERATOR")
      }
