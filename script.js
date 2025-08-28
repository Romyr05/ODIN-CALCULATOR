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
const del = document.querySelector("#del")
const delAll = document.querySelector("#delAll")
const dot = document.querySelector("#dot")

current.textContent = "0"


calc_num.forEach( (button) => {
    button.addEventListener(("click"), () => {append(button.textContent)})
});

calc_ope.forEach((button) => {
    button.addEventListener(("click"),() => {operator(button.textContent)})
})

equal.addEventListener(("click"),() => evaluate())

del.addEventListener(("click"), () => clear())

delAll.addEventListener(("click"),() => clearAll())

dot.addEventListener(("click"), () => create_dot())

//Functions
function append(number){
    if(current.textContent === '0' || reset){
        current.textContent = ""
        reset = false                      
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
    if(current.textContent === "0" || Currentoperator === null) return
    if(reset) return
    second_number = current.textContent
    equation.textContent = (`${first_number}${Currentoperator}${second_number}`)
    answer = operate(
        parseFloat(first_number),
        parseFloat(second_number),
        Currentoperator)
    current.textContent = answer
}

function create_dot(){
    if(current.textContent === ""){
        return
    }else if(current.textContent.includes(".")){
        return
    }

    current.textContent += "."
}

function clearAll(){
    equation.textContent = ""
    current.textContent = "0"
    first_number = ""
    second_number = ""
    Currentoperator = null
    reset = false
}

function clear(){
    current.textContent = current.textContent.slice(0,-1)
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

function modulo(num1, num2){
    return num1 % num2
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
    case "x":
        answer = multiply(num1, num2);
        break;
    case "÷":
        answer = divide(num1, num2)
        break
    case "%":
        answer = modulo(num1,num2)
    }
    return answer
}



