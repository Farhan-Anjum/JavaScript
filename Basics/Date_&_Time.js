//Temporal Now


let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toLocaleDateString);
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());


//Type of
console.log(typeof myDate); //Object


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString); // Jan 23 2023

let myCreatedDateOne = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateOne.toLocaleString); // 1/23/2023 5:03:00 AM




//YY-MM-DD
let Date = New Date("2023-01-14");
console.log(Date.toLocaleString()); // 1/14/2023

//MM-DD-YY

let DateOne = New Date("01-14-2023");
console.log(DateOne.toLocaleString()); //1/14/2023



//++++++++++++ TimeStamp ++++++++++++

let myTimeStamp = Date.now()
console.log(myTimeStamp); //

console.log(myCreatedDate.getTime());


console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1);


console.log(newDate.getDay());


` ${newDate.getDay()} and time`



newDate.toLocaleString('default', {
    weekday: "long",
    
})
