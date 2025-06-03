let score = "33aabbs"

// console.log(typeof(score))
// console.log(typeof score)
let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // output -> NaN i.e not a number

// "33" -> 33
// "33aabedsd" -> NaN
// true -> 1
// false -> 0

let isLoggedIn = 0 
let toBoolean = Boolean(isLoggedIn)
// console.log(toBoolean) // any number other than zero will give true
// if it would be empty string then it will show false
// if it would be a string then it will show true


let value = 3
let negValue = -value
// console.log(negValue)

// basic mathematics operation
// console.log(2+2)
// console.log(3-2)
// console.log(2*2)
// console.log(2**3) // used for power
// console.log(3/2)
// console.log(3%2)

let str1 = "hello "
let str2 = "lakshay"
let str3 = str1 + str2
// console.log(str3)

// console.log(1 + "2" + 1)
// console.log(1 + 2 + 3 + "9")
// console.log("2" + 1 + 1 + 5 + 6)
// agar string pehle aa rhi hai toh aage ka sara bhi string ki tarah hi treat hoga
// aur agr phle operations hai toh saare operations operate honge, fir jha string milegi vha se sara string ho jaega

let gameCounter = 100
console.log(++gameCounter)