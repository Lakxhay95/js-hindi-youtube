const mySym = Symbol("key1")

const jsUser = {
    name: "Lakshay", // everything is taken as string on the left hand side
    "Full Name": "Lakshay Gupta",
    // mySym: "myKey1",
    [mySym]: "mykey1",
    email: "lakshay@google.com",
    isLoggedIn: false,
    profile: 2
}

// console.log(jsUser.name) // not preffered because by this way you cannot access 'full name'
// console.log(jsUser["email"]) // preffered way is this

// console.log(typeof jsUser["mySym"]) // this is will give string type, but we want symbol, here syntactical error is present, use square brackets to create symbol
// console.log(typeof jsUser[mySym])

jsUser["email"] = "lakshay@apple.com"
// Object.freeze(jsUser)
jsUser["email"] = "lakshay@microsoft.com" // this value will not be changed
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello World from a JS User!")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this["Full Name"]}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())