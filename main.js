const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const output = document.querySelector('.output')
const decimal = document.querySelector('[data-decimal]')

let operator = '';
let num1 = '';
let num2 = '';
    
numberButtons.forEach(numberButton=>{
    numberButton.addEventListener('click',(e)=>{
        if (operator === ''){
            num1 += e.target.innerText
            output.textContent = num1
        }
        else{
            decimal.disabled = false;
            num2 += e.target.innerText
            output.textContent = num2
        }
    })
        
})
allClearButton.addEventListener('click',()=>{
    output.textContent = ''
    operator = ''
    num1 = ''
    num2 = ''
    result = ''
    decimal.disabled = false;
})

deleteButton.addEventListener('click', ()=>{
    //deleting from both numbers 
        num1 = num1.slice(0,num1.length -1)
        output.textContent = num1
    
        num2 = num2.slice(0, num2.length - 1)
        output.textContent = num2 
})

        
operationButtons.forEach(opButton=>{
    opButton.addEventListener('click',(e)=>{
                
        if(e.target.innerText !== '='){
        operator = e.target.innerText;
                
        console.log('num1 '+num1)
        console.log('operator '+operator)
        output.textContent = operator
        
        }
        else {
        console.log('num2 '+num2)
        decimal.disabled = false;
        switch(operator) {
            case '+':
                result = parseFloat(num1) + parseFloat(num2)
                break;
            case '-':
                result = parseFloat(num1) - parseFloat(num2)
                break;
            case 'x':
                result = parseFloat(num1) * parseFloat(num2)
                break;
            case '/':
                num2 === 0 ? output.textContent = '🤣' : result = parseFloat(num1) / parseFloat(num2)
                break;
                    default:
                    break;
            }
        
        }   
        if (result !== ''){ //if there is already a result, ie if a calculation has already be performed
            num1 = result //assign the result from prev calculation to number one
            num2 = '' //clear num2 to complete calculation as per normal 
        }
        output.textContent = parseFloat(Math.round(result * 10000) / 10000)
                
    })
})
const disableButton = ()=>{
    decimal.disabled = true;
}
decimal.addEventListener('click', disableButton)
    
//disable operators after one has been selected per calculation
