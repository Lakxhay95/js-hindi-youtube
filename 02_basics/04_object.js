// Singleton

// const tinderUser = new Object()
const tinderUser = {}
tinderUser["name"] = "Lakshay Gupta"
tinderUser.email = "lakshay@tinder.com"
tinderUser.age = 23
tinderUser["Location"] = "Noida"

// console.log(tinderUser)

const regularUser = {
    email: "someone@google.com",
    name: {
        first_name: "Lakshay",
        middle_name: "",
        last_name: "Gupta"
    },
    age: 23
}

// console.log(regularUser["name"]["first_name"])

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

// const obj3 = Object.assign(obj1, obj2) // to concatinate objects
// console.log(obj3)
// Object.assign wants target and source as a parameter, so it is adviced to take a empty object which will act as a target.

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)

// Spread the object
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

// array of objects
const users = [
    {
        name: "pritam",
        id: "p@google.com"
    },
    {
        name: "ramesh",
        id: "r@google.com"
    }
]

// Usefull
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

// Object de structure
const course = {
    coursename: "js in hindi",
    price: 999,
    courseTaker: "Lakshay"
}

const {courseTaker: Taker} = course
console.log(Taker)

// API -> apna kaam kisi aur k sir pe dalna
// JSON -> JavaScript Object Notation