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
}
const add = new Calculator()
//add.add(5,2)

const subtract = new Calculator()
//subtract.subtract(3,5)

const multiply = new Calculator()
//multiply.multiply(5,2)

const divide = new Calculator()
//divide.divide(1,2)


const operate = (operator,num1,num2)=>{

    //first number selected before operator is num1, num2 is the number after operator, calulate before 
    //applying next operator
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

console.log(operate('*',5,7))