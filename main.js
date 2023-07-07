const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const displayValue = document.querySelector('[data-display-value]')
const buttons = document.querySelectorAll('button');


function Calculator(){
    this.add = (num1, num2)=>{
        console.log(num1 + num2)
    }
    this.subtract = (num1,num2)=>{
        console.log(num1 - num2)
    }
    this.multiply = (num1,num2)=>{
        console.log(num1 * num2)
    }
    this.divide = (num1,num2)=>{
        if(num1 == 0 || num2 == 0){
            alert('Invalid operation! Try again.')
        }
        console.log(num1 / num2)
    }
    this.operate = (operator, num1,num2)=>{
        
        if(operator === '+'){
        add.add(num1,num2)
    }
    if(operator === '-'){
        subtract.subtract(num1,num2)
    }
    if(operator === '*'){
        subtract.multiply(num1,num2)
    }
    if(operator === '/'){
        subtract.divide(num1,num2)
    }
    }
    this.numbers
}
const add = new Calculator()
//add.add(5,2)

const subtract = new Calculator()
//subtract.subtract(3,5)

const multiply = new Calculator()
//multiply.multiply(5,2)

const divide = new Calculator()
//divide.divide(1,2)

const operate = new Calculator()
//console.log(operate.operate('*',5,7))

//function to populate the display
//target all number buttons and the value is the input like rps using for each
//create display value in a variable

//get value of each button and then assign with corresponding number
//display value == input

const populateDisplay = () =>{
    
}
//displayValue = ''
buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        console.log(button.innerText)
    })
})

console.log(operate.operate('*',5,2))