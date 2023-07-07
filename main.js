const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
//const displayValue = document.querySelector('[data-display-value]')
//const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output')

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
    this.clear = ()=>{
        allClearButton.addEventListener('click',()=>{
            displayValue = ''
        })
        
    }
    this.operate = (operator, num1,num2)=>{
        operationButtons.forEach(button=>{
            button.addEventListener('click',()=>{
                console.log(button.innerText)
                operator = button.innerText

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
                output.textContent = operator
            })
        })
        
    }
    this.appendNumber = (number)=>{
        const displayValue = output.textContent;
        if(displayValue.length < 10){
            output.textContent = parseInt(displayValue + number).toString();
            console.log(displayValue)
        }
    }
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

const appendNumber = new Calculator()

const clear = new Calculator()
clear.clear()

const populateDisplay = () =>{
    let displayValue = ''
    numberButtons.forEach(button=>{
        button.addEventListener('click', ()=>{
            //console.log(button.innerText)
            appendNumber.appendNumber(button.textContent)
            //output.textContent = displayValue
        })
        
    })
}
populateDisplay()

console.log(operate.operate('*',5,2))