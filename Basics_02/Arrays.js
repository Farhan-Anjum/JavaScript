//Arrays


//Declaration:

const myArray = [0, 1, 2, 3, 4, 5, true, "Farhan"]
console.log(myArray[0]);

//JS arrays are resizeable - not associative arrays
//Zero based indexing
//Shallow copy: share the same reference point
//Deep Copy: does  not share the same ref points

//Another method to declare the array
const myArr = new Array(0, 1, 2, 3, 4, 5);
console.log(myArr[1]);



//Array Method
myArr.push(6)
myArr.push(9)

console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(10) //add elements in first
console.log(myArr);

myArr.shift() //remove elements in first
console.log(myArr);


console.log(myArr.includes(9)); //Yes

console.log(myArr.index(2)); //Yes


const newArr = myArr.join()
console.log(myArr);
console.log(tyoeof newArr);


//Slice and Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr);

//Splice
const myn2 = myArr.splice(1, 3);
console.log(myn2);



//Difference:Change the original array or Manipulate the original array - take out the portio

const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); // will create a array within array
//make array as an element


const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); //merge the elements


const all_new_heroes = [...marvel_heroes, ...dc_heroes] //Spread operator
console.log(all_new_heroes); //erge the elements

//Flat operator
const another_array = [1, 2,3,[4,5,6], 7, [6,7,[4,5]]]
                            
 const real_another_array = another_array.flat(Infinity) //can pass any depth
console.log(real_another_array);


//Important

console.log(Array.isArray("Farhan"));
console.log(Array.from("Farhan")); //make separate array of the each character

console.log(Array.from({name :"Farhan"})); //Best for Data conversion or formating


let score1 = 100
let score2 = 200
let score3 = 400


console.log(Array.of(score1, score2, score3)); //convert into the array


