const accountId = 188553
let accountEmail = "lakshay@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // as it is const, it cannot be changed
accountEmail = "tng@yahoo.com"
accountPassword = "2905"
accountCity = "Bhopal"

// prefer not to use var because of the issue in block scope and functional scope

console.log(accountId)
console.table([accountEmail, accountPassword, accountCity])