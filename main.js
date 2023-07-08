const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const output = document.querySelector('.output')

function Calculator(){
    
    this.populateDisplay = ()=>{
        numberButtons.forEach(button=>{
        button.addEventListener('click', ()=>{
            displayValue = appendNumber.appendNumber(button.textContent)
        })
        
    })
    }
    this.clear = ()=>{
        allClearButton.addEventListener('click',()=>{
            displayValue = ''
        })
        
    }
    this.operate = (operator, num1, num2)=>{
        operationButtons.forEach(button=>{
            button.addEventListener('click',()=>{
               operator = button.innerText
               prevOperand = displayValue
               console.log(prevOperand)
                if(operator === '+'){
                    result = num1 + num2
                }
                if(operator === '-'){
                    result = num1 - num2
                }
                if(operator === '*'){
                    result = num1 * num2
                }
                if(operator === '/'){
                    result = num1 / num2
                }
               output.textContent = operator 
                console.log(output.textContent)
            })
        })
        
    }
    this.appendNumber = (number)=>{
        let displayValue = output.textContent;
        if(displayValue.length < 10){
            output.textContent = parseFloat(displayValue + number).toString();
            displayValue = output.textContent
            console.log(displayValue)
        }
    }
    this.equals = ()=>{
        equalsButton.addEventListener('click',()=>{
        
            
        })
    }

}

const operate = new Calculator()
console.log(operate.operate('*',5,7))

const appendNumber = new Calculator()

//clear btn not working yet
const clear = new Calculator()
clear.clear()


const populateDisplay = new Calculator()
populateDisplay.populateDisplay()

const equals = new Calculator()
equals.equals()

//console.log(operate.operate('+',5,2))

//save display value to num1
//save chosen operator
//calculate result based on display value after operator has been chosen 
// .