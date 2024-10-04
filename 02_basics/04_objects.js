// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "ayush@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "Rajput"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
{
    id: 1,
    email: "xyz@gmail.com"
},
{
    id: 1,
    email: "xyz@gmail.com"
},
{
    id: 1,
    email: "xyz@gmail.com"
},
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ayush"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

console.log(Instructor);


