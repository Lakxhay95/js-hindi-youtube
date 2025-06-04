// Immediately Invoked Function Expression(IIFE)
// Use semicolon ';' after iife function

// one simple way
    // function chai(){
    //     console.log("DB Connected")
    // }

    // chai()

// iife
    // Nmaed IIFE
    // (function chai(){
    //     console.log("DB Connected")
    // }) ();
    // The first paranthesis acts as a function description
    // And the second paranthesis acts as a function call

// Why used iife?
// Global scope ke pollution se bachane k liye

// Arrow function in IIFE
// Un named IIFE
// ( () => {
//     console.log(`DB Connected Two`)
// } )();

// to pass a parameter in iife
( (name) => {
    console.log(`DB is connected by ${name}`)
} )("lakshay");