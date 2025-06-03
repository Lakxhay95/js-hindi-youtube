const myArr = [1, 2, 3, 4, 5, 6]
// console.log(myArr[1])

const newArr = ["lakshay", 23, 10000]
// console.log(newArr[0].toUpperCase())
// console.log(newArr[2].toLocaleString('en-IN'))
// console.log(newArr)

newArr.push("eco-friendly")
// console.log(newArr)

// Slice and splice
console.log("A ", myArr)
console.log(myArr.slice(1, 3)) // slice does not manipulates the original array
console.log("B ", myArr)

console.log(myArr.splice(1, 3)) // Splice remove those elements from the array (manipulates the array).
console.log("C ", myArr)