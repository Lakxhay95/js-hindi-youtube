let myDate = new Date()
// console.log(myDate) // 2025-06-03T11:45:03.287Z
// console.log(myDate.toString()) // Tue Jun 03 2025 11:45:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // Tue Jun 03 2025
// console.log(myDate.toISOString()) // 2025-06-03T11:45:03.287Z
// console.log(myDate.toJSON()) //2025-06-03T11:45:03.287Z
// console.log(myDate.toLocaleDateString()) // 6/3/2025
// console.log(myDate.toLocaleString()) // 6/3/2025, 11:47:18 AM

// console.log(typeof myDate) // object

// Month in javascript starts from 0 -> january

let myCreatedDate = new Date(2002, 4, 29)
console.log(myCreatedDate.toDateString()) // Wed May 29 2002

let timeDate = new Date(2002, 4, 29, 19, 50)
console.log(timeDate.toLocaleString()) // 5/29/2002, 7:50:00 PM