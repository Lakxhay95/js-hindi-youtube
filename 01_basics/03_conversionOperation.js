let score = "33aabbs"

console.log(typeof(score))
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // output -> NaN i.e not a number

// "33" -> 33
// "33aabedsd" -> NaN
// true -> 1
// false -> 0

let isLoggedIn = 0 
let toBoolean = Boolean(isLoggedIn)
console.log(toBoolean) // any number other than zero will give true
// if it would be empty string then it will show false
// if it would be a string then it will show true