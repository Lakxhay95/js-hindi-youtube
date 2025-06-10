const object = {
    M: "Meta", 
    A: "Amazon", 
    a: "Apple", 
    N: "Netflix",
    G: "Google"
}
// To get the keys in the object.
// for(const iterator in object)
// {
//     console.log(iterator)
// }

// To get the value of the key.
// for(const val in object)
// {
//     console.log(object[val])
// }

// For of loop values print krta h
// For in loop keys print krta h

const myArr = [1, 2, 3, 4, "Lakshay", "Gupta", 92]
// for(const check in myArr)
// {
//     console.log(check)
// }

// Object bna hi isliye tha ki usme key khud se design kr skte h, arrays ki kkeys predefined hoti h(index starting from zero).
for(const check in myArr)
{
    console.log(`${check}th key has the value: ${myArr[check]}`)
}