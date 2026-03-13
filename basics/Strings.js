const name = "Shree" 
const rollNo = 29
//console.log(name+rollNo); -->outdated

//console.log(`Hello my name is ${name} and my roll number is ${rollNo}`);

const Game = new String("Shridhar")

//console.log(Game[2]);
//console.log(Game.__proto__);
//console.log(Game.length); -->8
//console.log(Game.toUpperCase()); --> SHRIDHAR
//console.log(Game.charAt(2));  --> r
//console.log(Game.indexOf('r'));  --> 2

//console.log(Game.substring(0,4)); --> Shri
//console.log(Game.slice(-6,5));  --> rid

const newString = "   Shridhar   "
//console.log(newString.trim());  --> Removes extra spaces 

//console.log(Game.replace('h','r')); -->  srridhar

// console.log(Game.includes('dha')); --> this function tells that a specific keywoeds exist or not

console.log(Game.split("&"));
