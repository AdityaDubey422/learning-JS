const accountId = 12345
let accountEmail = "aditya@gmaul.com"
var accountName = "Shubh"
accountCity = "Jaipur"
let accountState

// accountId = 1 //not allowed

accountEmail = "hc@hc.com"
accountName = "hello"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountName, accountCity,accountState])

/* Prefer not to use var 
because of issue in block scope and functional scope
*/