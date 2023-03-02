"use strict"
const sign = prompt("Вкажіть одну з арифметичних операцій: add, sub, mult, div");

let operand1 = Number(prompt("Введіть перше число"));
while (Number.isNaN(operand1)) {
    operand1 = Number(prompt("Ви ввели не число. Спробуйте ще раз"));
};

let operand2 = Number(prompt("Введіть друге число"));
while (Number.isNaN(operand2)) {
    operand2 = Number(prompt("Ви ввели не число. Спробуйте ще раз"));
};

let result;


switch (sign) {
    case "add":
        result = operand1 + operand2;
        console.log(`${operand1} + ${operand2} = ${result}`);
        break;
    case "sub": 
        result = operand1 - operand2;
        console.log(`${operand1} - ${operand2} = ${result}`);
        break;
    case "mult": 
        result = operand1 * operand2;
        console.log(`${operand1} * ${operand2} = ${result}`);
        break;
    case "div": 
        result = operand1 / operand2;
        console.log(`${operand1} / ${operand2} = ${result}`);
        break;
    default: 
        console.log(`${sign} - не є  арифметичною операцією. Уважніше спробуйте ще раз`);
        break;
}    


