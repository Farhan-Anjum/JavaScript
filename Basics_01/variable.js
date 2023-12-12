
// Constant is declared by using keyword const
// Value cannot be changed
const accountId = 144553

// Variables can be declared using two keywords var and let but the preffred way is let 
// in modern JS due to scope issue.
// Scope : Variables declared Globally (outside any function) have Global Scope. 
// Global variables can be accessed from anywhere in a JavaScript program.

let accountEmail = "farhan@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState; 

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Islamabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// Console.table is used to print the list of variables at a once.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])