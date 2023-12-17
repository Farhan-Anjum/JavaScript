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










