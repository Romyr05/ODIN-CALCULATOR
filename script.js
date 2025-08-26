//Elements
const prompt = require('prompt-sync')({sigint: true});

//Functions
function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1/num2
}

let testing = prompt("enter a number")

let num1,ope,num2;

num1 = parseFloat(testing[0])
ope = testing[1].trim()
num2 = parseFloat(testing[2])


function operate(num1, num2, ope){
    let answer;
    switch(ope){
    case "+":
        answer = add(num1,num2);
        break;
    case "-":
        answer = subtract(num1, num2);
        break;
    case "*":
        answer = multiply(num1, num2);
        break;
    case "/":
        answer = divide(num1, num2)
        break
    }
    return answer
}

test = operate(num1,num2,ope)
console.log(test);


