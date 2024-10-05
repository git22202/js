function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbwrs(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbwrs(num1, num2){
    //  let result = num1 + num2
    //  return result
    return num1 + num2
}

const result = addTwoNumbwrs(3,4)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ayush"));
console.log(loginUserMessage());

