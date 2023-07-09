const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const output = document.querySelector('.output')

    let operator = '';
    let num1 = '';
    let num2 = '';
    
        numberButtons.forEach(numberButton=>{
        numberButton.addEventListener('click', e=>{
            if (operator === ''){
                num1 += e.target.innerText
                output.textContent = num1
            } if(operator !== ''){
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
        })
        
        operationButtons.forEach(opButton=>{
            opButton.addEventListener('click',e=>{
                
               
               if(e.target.innerText !== '='){
                operator = e.target.innerText;
                
                console.log('num1'+num1)
                console.log(operator)
                //num2 not being assigned
               } else{
                console.log('num2'+num2)

                switch(operator) {
                    case '+':
                        result = parseFloat(num1 + num2)
                        break;
                    case '-':
                        result = parseFloat(num1 - num2)
                        break;
                    case 'x':
                        result = parseFloat(num1 * num2)
                        break;
                    case '/':
                        result = parseFloat(num1 / num2)
                        break;
                        default:
                            break;
                   }
                   console.log('result '+result)
                   output.textContent = result
               }
               
                 
                
            })
        })
        
    
   


//console.log(operate.operate('+',5,2))

//there was a problem with the function calling within the object...