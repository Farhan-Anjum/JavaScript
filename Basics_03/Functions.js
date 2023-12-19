

function sayMyName(){  //Function
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("H");
    console.log("A");
    console.log("N");
}

sayMyName(); //Execution



//Add two numbers Method 1
function addTwoNumbers(number1, number2){
    
    console.log(number1 + number2 );
}

addTwoNumbers(3, 5) //8


//Parameters or Arguements
//number1, number2 are the parameters
//3, 5 are the arguements


//Add two numbers Method 2
function addTwoNumbers(number1, number2){
    
    let result = number1 + number2
    return result

}

//Return k baad kuch bhi print nh hoga

const result = addTwoNumbers(3, 5)
console.log("Result:", result);




//Add two numbers Method 3
function addTwoNumbers(number1, number2){
 
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result:", result);


function loginUserMessage(userName){
    return `${userName} just Logged In`
}


console.log(loginUserMessage("Farhan")); //Important

//If values is not provided will return undefined just logged in 

//If-Else at Glance

function loginUserMessage(userName){
   
    if (username === undefined){
    console.log("Please enter a username");

   }
   return `${userName} just Logged In`


}

//Professional Practice

function loginUserMessage(userName){
   
    if (!username){
    console.log("Please enter a username");

   }
   return `${userName} just Logged In`


}

//Setting default values:
function loginUserMessage(userName = "Sam"){
   
    if (!username){
    console.log("Please enter a username");

   }
   return `${userName} just Logged In`

}

//+++++++++++++++++=== Functions with Objs and Arrays +++++++++++++++++++
function calculateCartPrice(num1){
        return num1

}
console.log(calculateCartPrice(2));

//Rest Operators or Spread Operator // ... is a rest or spread opt

function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200, 400, 500));



//Objects // How to pass objs in Function

const User = {
    userName = "Farhan",
    price: 199
}



function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is 
    ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "Same",
    price: 399
})


//For arrays

const myNewArray = [200, 400, 600, 700]

function returnedSecondValue(getArray){
    return getArray[1]
}


console.log(returnedSecondValue(myNewArray)); //400
console.log(returnedSecondValue([200, 400, 600, 700])); //400

