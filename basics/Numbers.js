const n = 500
//console.log(n);  ---> 500

const balance = new Number(100)
//console.log(balance); ---> Number: 100

const otherNumber = 123.898
console.log(otherNumber.toPrecision(2));

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-In')); ---> 1,00,000

// ++++++++++++ MATHS ++++++++++++

console.log(Math);
/*console.log(Math.abs(-8)); ---> 8
console.log(Math.round(5.5)); ---> 6
console.log(Math.ceil(5.1)); ---> 6
console.log(Math.floor(5.9)); ---> 5
console.log(Math.min(1,2,3,4,5)); ---> 1
console.log(Math.max(1,2,3,4,5)); ---> 5
console.log(Math.random); ---> gives values btwn 0 and 1

*/
//console.log(Math.random()*10+1);  ---> for getting any random value greater than one

//console.log(Math.floor(Math.random()*10+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);










