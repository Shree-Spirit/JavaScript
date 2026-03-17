const myArray = [1,2,3,4,5]
//console.log(myArray)
//console.log(myArray[1]);

// Array Methods
myArray.push(6)
myArray.push(7)  

//console.log(myArray); ======> [1,2,3,4,5,6,7]
myArray.pop()   
///console.log(myArray); =====> [1,2,3,4,5,6]
myArray.unshift(8)
/* console.log(myArray);  ====> [
  8, 1, 2, 3,
  4, 5, 6
] */
myArray.shift()
//console.log(myArray); =====> [ 1, 2, 3, 4, 5, 6 ]

//console.log(myArray.includes(8)) ====> false

const newArr = myArray.join()

//console.log(myArray);
//console.log(newArr);
//console.log(typeof(newArr));

console.log("A",myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)
console.log("C",myArray);

console.log(myn2);








