//Three keywoerds Let, Var, Const story

let a = 10
const b =20
//var c = 30 //Global Scope


// console.log(a);
// console.log(b);
// console.log(c);


//Scope is curly braces in every programming lang along with function or loop

if (true){

let a = 10
const b =20
var c = 30
console.log("INNER: " , a);

} //Block scope

//Scope in Loop

for (i =0; i <Array.length; i++){
     const element = array[i];
}