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

// console.log(loginUserMessage("Ayush"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
    username: "Ayush",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 199
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([100, 200, 300, 400]));
