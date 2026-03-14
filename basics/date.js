const myDate = new Date()
/*
console.log(myDate);  ---> 2026-03-14T14:28:34.881Z
console.log(myDate.toDateString());   ---> Sat Mar 14 2026
console.log(myDate.toLocaleString());  ---> 3/14/2026, 2:28:34 PM
console.log(myDate.getTime());   ----> 1773498514881
*/
let DOB = new Date(2005,9,15)
console.log(DOB.toDateString());

console.log(DOB.toLocaleString());

let date = new Date("10-15-2005")
console.log(date.toLocaleString());

let myTimeStamps = new Date()
/*
console.log(myTimeStamps); ---> 2026-03-14T14:39:12.632Z
console.log(myTimeStamps.toString()); ---> Sat Mar 14 2026 14:39:12 GMT+0000 (Coordinated Universal Time)

console.log(date.getTime()); ---> 1129334400000
*/

//console.log(Math.floor(date/100000)); ----> for getting small calues

console.log(date.getMonth());
console.log(date.getDay());

