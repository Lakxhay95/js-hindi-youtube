// types of datatypes
// # primitive data type
// # non primitive data type(reference type)

// Primitive data type
// 7 types : string, number, boolean, null, undefined, symbol, bigint

// Reference type
// Array, objects, functions

// javascript is dynamically typed language because the data type will be automatically assigned at the time of compilation or code execution

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 13334556675867n
// console.log(typeof(bigNumber)) // BigInt

const city = ["meerut", "noida", "gurugram", "delhi"];

let newObj = {
    name : "lakshay",
    age : 22,
}

const myFunc = function() {
    console.log("Hello World")
}

console.log(typeof myFunc) // Output function object
// the type of every non primitive data type is object