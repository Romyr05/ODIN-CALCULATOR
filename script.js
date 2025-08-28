//Elements
let first_number = ""
let second_number = ""
let Currentoperator = null
let reset = false

//DOM
const equation = document.getElementById("equation")
const current = document.getElementById("current")
const calc_num = document.querySelectorAll("#calc_num")
const calc_ope = document.querySelectorAll("#calc_ope")
const equal = document.querySelector("#equal")
const del = document.querySelector("#del")
const delAll = document.querySelector("#delAll")
const dot = document.querySelector("#dot")

current.textContent = "0"

//event listeners
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

window.addEventListener(("keydown"), (e) => {
    keyboardWrite(e.key)
})

//Functions
function append(number){   //Appending the number in the screen
    if(current.textContent === '0' || reset){
        current.textContent = ""
        reset = false                      
    }
    current.textContent += number
}

function operator(operator){  //Checking the operator
    if(Currentoperator !== null){
        evaluate()
    }
    first_number = current.textContent
    Currentoperator = operator 
    equation.textContent= (`${first_number} ${Currentoperator}`)
    reset = true
}

function evaluate(){   //Evaluating and operating it 
    if(Currentoperator === null) return
    if(reset) return
    if (Currentoperator === '÷' && current.textContent === '0') {
        alert("You can't divide by 0!")
        return
    }
    second_number = current.textContent
    equation.textContent = (`${first_number} ${Currentoperator} ${second_number}`)
    answer = operate(
        parseFloat(first_number),
        parseFloat(second_number),
        Currentoperator)
    current.textContent = round_number(answer)
    reset = true
}

function create_dot(){  //Making a dot
    if(current.textContent === ""){
        return
    }else if(current.textContent.includes(".")){
        return
    }

    current.textContent += "."
}

function clearAll(){   //Clearing all the inputs
    equation.textContent = ""
    current.textContent = "0"
    first_number = ""
    second_number = ""
    Currentoperator = null
    reset = false
}

function clear(){ //Clear only the rightmost digit
    current.textContent = current.textContent.slice(0,-1)
}

function round_number(number){
    return Math.round(number * 100) / 100
}


function keyboardWrite(event){ //keyboard inputs
    if(event >= 0 && event <= 9){
        append(event)
    }else if(event === "."){
        create_dot()
    }else if(event === "Backspace"){
        clear()
    }else if(event === "Enter"){
        evaluate()
    }else if (event === '+' || event === '-' || event === '*' || event === '/' || event === '%'){
        operator(normalize_function(event))
    }else{
        return
    }
}

function normalize_function(event){ //Translating keyboard into calc symbols
    if(event === '+' ){
        return '+'
    }
    else if(event === '-'){
        return '-'
    }
    else if(event === '*' ){
        return 'x'
    }
    else if(event === '/'){
        return '÷'
    }
    else if(event === '%'){
        return '%'
    }
}

//Calculator Functions
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
    if(num2 === 0){
        return "Not possible to divide it by 0"  
    }
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
    default:
        return null
    }
    return answer
}



