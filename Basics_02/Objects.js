//Singleton => aaek he object
//Declare like Literal - not a singleton
//Declare like construrctor => make singleton

//Object Literals
//Object.create /constructor method

//Symbol Usage
const mySym = Symbol('key1');



const JsUsers = {
    name: 'Farhan',
    "full_name" : "Farhan Anjum"
    age = 23,
    [mySym]: "myKey1" //important concept for Interview point
    location: "Lahore",
    email: "Farhan@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUsers.email); //One method to acces Obj
 console.log(JsUsers["full_name"]); //Second method //Square notation
 console.log(tyoeof JsUsers[mySym]); //String




JsUsers.email = "Farhan@chatgpt.com" //over wriet the value or change it

Object.freeze(JsUsers); //Cant change the object values



JsUsers.greeting = function(){
    console.log("Hello JS User");

}

JsUsers.greetingTwo = function(){
    console.log(`HELLO JS USER, ${this.name}`); //name coming from Object

}
console.log(JsUsers.greeting());
console.log(JsUsers.greetingTwo());