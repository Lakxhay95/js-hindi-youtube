const num = []
if(num)
{
    console.log("True value")
}
else
{
    console.log("False values")
}

const isString = ""
if(isString)
{
    console.log("True values")
}
else
{
    console.log("False values")
}

// Empty arrays is taken as true, whereas empty string is taken as false

// There are some pre defined rules for true values and false values

// Truthy values
// "0", 'false', " ", [], {}, function(){}

// Falsy values
// False, 0, -0, BigInt 0n, "", null, undefined, Nan

// Nullish Coalescing Operator ( ?? ): null undefined

let var1
var1 = null ?? 10 ?? 15 // jo bhi value phle milegi vo assign ho jaegi
console.log(var1)
