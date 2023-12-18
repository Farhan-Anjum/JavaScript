//++++++++++++++++++++ Object De - structuring +++++++++++++++++++++++++++

const course = {
    coursename :"JS in English",
    price: "999",
    CourseInstructor : "Hitesh Chaudhary"
}

.//course.CourseInstructor

const {CourseInstructor} = course
console.log(CourseInstructor); //Syntax 1


const {CourseInstructor: instructor} = course
console.log(instructor); //Syntax 2


const navbar = {{company}} => {


}

navbar(company = "Farhan") //de structuring.



//+++++++++++++++++ API ++++++++++++++++++++++++
// Application Programming Interface

//JSON
{
    "name" : "Farhan",
    "coursename" : "Js in English",
    "price" : "free"
}


//API - JSON - Object - value


[
    {},
    {},
    {},  // API response can be in array type

]


//JSON formatter


