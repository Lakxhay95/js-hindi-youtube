function add(num1, num2)
{
    console.log(num1 + num2)
}

function addTwo(number1, number2){
    return number1 + number2
}
// in js you do not need to specify the data type

const result = addTwo(3, 4)
// console.log(result)

function loginUserMessage(username){
    if(username){
        return `${username} logged in.`
    }
    return `Enter a valid username`
}

// console.log(loginUserMessage("Lakshay"))

// Rest operator
// Syntax of rest and spread operator is same only the use case differs
function addToCart(...num1)
{
    return num1
}

console.log(addToCart(100, 200, 300, 400, 500))


function addOne(num){
    return num + 1
}
addOne(5) // this could be written before and after function no problem

// Hoisting
// here function name acts a variable name
// addTwo(5) // this will give error
const addTwo = function(num){
    return num + 2
}
addTwo(5)