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



//++++++++++++++++++ Objects part 2 ++++++++++++++++++


//const tinderUser = new Object(); //Also an Object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Farhan"
tinderUser.isLoggedIn = false

console.log(tinderUser);




const regularUser = [
    email: "some@gamil"
    fullname: {
        userFullName :{
            firstName : "Farhan"
            LastName : "Anjum"
        }
    }
]

console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {
    1: "a", 2: "b"
}

const obj2 = {
    3: "c", 4: "d"
}

//const obj3 = {obj1, obj2} //there will be problem

const obj3 = Object.assign({}, obj1, obj2)


console.log(obj3);


const obj4 = {..obj1, ...obj2}
console.log(obj4);




const users = [
    {
        id: 1
        email: "farhan@gaml.com"
    },
    {
        id: 2
        email: "farhan@gaml.com"
    },
    {
        id: 3
        email: "farhan@gaml.com"
    },
]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //very important
console.log(Object.values(tinderUser)); //very important

console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'));



