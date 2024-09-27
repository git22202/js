const accountId = 144553
let accountEmail = "ayush@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ar@ar.com"
accountPassword = "21212121"
accountCity = "Ambernath"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])