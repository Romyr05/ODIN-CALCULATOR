//Elements
let first_number = ""
let second_number = ""
let Currentoperator = null
let reset = false


const equation = document.getElementById("equation")
const current = document.getElementById("current")
const calc_num = document.querySelectorAll("#calc_num")
const calc_ope = document.querySelectorAll("#calc_ope")
const equal = document.querySelector("#equal")
const delAll = document.querySelector("#delAll")


calc_num.forEach( (button) => {
    button.addEventListener(("click"), () => {append(button.textContent)})
});

calc_ope.forEach((button) => {
    button.addEventListener(("click"),() => {operator(button.textContent)})
})

equal.addEventListener(("click"),() => evaluate())

delAll.addEventListener(("click"),() => clearAll())

//Functions
function append(number){
    if(current.textContent === '0' || reset){
        current.textContent = ""                      
    }
    current.textContent += number
}

function operator(operator){

    first_number = current.textContent
    Currentoperator = operator 
    equation.textContent= (`${first_number} ${Currentoperator}`)
    reset = true
}

function evaluate(){
    second_number = current.textContent
    equation.textContent = (`${first_number}${Currentoperator}${second_number}`)
    answer = operate(
        parseFloat(first_number),
        parseFloat(second_number),
        Currentoperator)
    current.textContent = answer
}

function clearAll(){
    equation.textContent = ""
    current.textContent = "0"
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



