const accountId = 144553
let accountEmail = "danish@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // Undefined ,Because no any value is assigned
// accountId = 2 // not allowed

accountEmail = "hussain@gmail.com"
accountPassword = "54545"
accountCity = "Delhi"
console.log(accountId);

/*
Prefer not use var
because of issue in block scope and functional scope & block scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])