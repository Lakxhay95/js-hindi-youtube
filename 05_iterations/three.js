// const newword = "This Is The Test Case For Testing 'Forof' Loop"
// for(const i of newword)
// {
//     if( (i >= 'a' && i <= 'z') || (i <= 'Z' && i >= 'A') )
//         console.log(`Every alphabet of the string is: ${i}`)
// }

// Map syntax -> key values hold some data
// data present in the map cannot be duplicate
// map holds the data in the order in which it is entered

const myMap = new Map()
myMap.set('IN', "INDIA")
myMap.set('US', "UNITED STATES")
myMap.set('FR', "FRANCE")
myMap.set('IN', "ENDIA") // This will overwrite the value of 'IN' key

// console.log(myMap)

// Iterating through the map.
// This will print the whole map
// for(const key of myMap)
// {
        // console.log(key)
// }

// Slight change in syntax
for(const [key, key2] of myMap)
{
    console.log(key2 )
}

// trying iterating objects
// const myObject = {
//     'game1' : "Need For Speed", 
//     game2 : "Player Unknown Battleground"
// }

// for(const iterator of myObject)
// {
//     console.log(iterator) // TypeError: myObject is not iterable
// }

// Result we cannot iterate objects using for of loop.