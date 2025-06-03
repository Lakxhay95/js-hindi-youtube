const hundreds = 1000000
// Converting to indian standard.
// console.log(hundreds.toLocaleString('en-IN'))

// ======================== Maths ======================== //

// console.log(Math.abs(-10))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))

console.log(Math.random()) // it will generate all the numbers between 0 and 1
console.log((Math.random() * 10) + 1)
console.log(Math.floor((Math.random() * 10) + 1)) // it will generate all numbers between 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula to generate random numbers between a given range