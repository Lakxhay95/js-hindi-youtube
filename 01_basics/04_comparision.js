// console.log(2 > 1)
// console.log(3 < 1)
// console.log(2 == 10)
// console.log(2 != 5)

// console.log("2" > 1)
// console.log("02" < 1)

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true
// the reason is that an equality check == and comparisons > < >= <= work differently.
// Comparison convert null to a number, treating it as a 0. That's why (3) null >= 0 is true and (1) null > 0 is false.

// console.log(undefined == 0)
// console.log(undefined < 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)

// strict check (===)
// not only checking the values, but also checking there datatypes.
console.log("2" === "2") // true
console.log("2" === 2) // false
console.log("2" == "2") // true