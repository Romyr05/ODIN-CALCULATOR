//Elements
let num1,ope,num2;

const equation = document.getElementById("equation")
const result = document.getElementById("result")
const calc_num = document.querySelectorAll("#calc_num")
const calc_ope = document.querySelectorAll("#calc_ope")



calc_num.forEach( (button) => {
    button.addEventListener(("click"), () => {append(button.textContent)})
});

calc_ope.forEach((button) => {
    button.addEventListener(("click"),() => {(button.textContent)})
})



//Functions
function append(number){
    if(first_number.textContent !== 0){
        first_number.textContent += number
        console.log()
    }
}


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



