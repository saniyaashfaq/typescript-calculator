import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter firstNumber", type: "number", name: "firstNumber" },
    { message: "enter secondNumber", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation", type: "list",
        name: "operator", choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
//console.log(answer);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
