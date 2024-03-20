#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Please choose the operator",
        type: "list",
        name: "Operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.Operators === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operators === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operators === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operators === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please Enter The Valid Operator");
}
console.log("The End");
