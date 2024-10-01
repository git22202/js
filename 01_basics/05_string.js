const name = "Ayush"
const repoCount = 30

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ayush-raj-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Ayush    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://ayush.com/ayush%20rajput"

console.log(url.replace('%20', '-'))

console.log(url.includes('ayush'));

console.log(gameName.split('-'));












