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

//Nested Scope


function one(){
     const username: "Farhan"


     function two(){
          const website = "youtube"
          console.log(username);

     }
     console.log(website);

     two()
}


one()

if(true){

     const username = "hitesh"
     if (username === "hitesh"){
          const website = " youtube"
          console.log(username + website);
     }

  //console.log(website);

}

//console.log(username); 


// ++++++++++++++++++++ Interesting +++++++++++++++++++++++

function  addone(num){
     return num +1
}


addone(5)


const addTwo = function(num){
     return num + 2
}

addTwo(5)

///Accessing the function before declaration - initiate hoisting

addTwo(5)
const addTwo = function(num){
     return num + 2
}

