const Number1 = +prompt ("number1")
const Operator = prompt ("operator?")
const Number2 = +prompt ("number2")

if (isNaN(Number1)  ||  isNaN (Number2)){
    console.log("ERORR!")
}
if (Operator === "+")  {
    
    console.log(Number1 + Number2)
}

if (Operator === "-") {
    console.log(Number1 - Number2)
}

if  ( Operator === "*" ){
    console.log(Number1 * Number2)
}