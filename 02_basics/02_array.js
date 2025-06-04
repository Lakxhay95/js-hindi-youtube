const marvel_heroes = ["thor", "ironman", "hulk", "spiderman"]
const dc_heroes = ["batman", "flash", "superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[4][4])

// const concatArray = marvel_heroes.concat(dc_heroes) // we have stored this in a new array because concatination returns a new array
// console.log(concatArray)

// one more option ot join the arrays
// spread operator -> it separates every element of the array

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // benefit of using spread operator is that you can add multiple arrays, in concat you can add only 2 arrays at a time
// console.log(all_new_heroes)

const another_array = [1, 2, 3, 4, [5, 6, 7], 8, 9, [10, 11, 12, [13, 14, 15, [16]], 17, 18], 19, 20]
// console.log(another_array)
const simple_array = another_array.flat(2) // this integer refers to the depth of flatenning. In case you do not know the actual depth you can use 'Infinity'
// console.log(simple_array)

console.log(Array.isArray([1, 2, 3, 4]))
console.log(Array.isArray("Lakshay"))
console.log(Array.from("Lakshay")) // used to convert anything to array
console.log(Array.from({name: "Lakshay"})) // Interesting case, it will return null array.

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3)) // creates a array from set of elements
// the changes are made to commit this repo