// Create Array
const number = [24, 23, 60, 1, 68];
const number2 = new Array(90, 7, 43, 100, 300);
const fruit = ['Apple', 'Banana', 'Cherry', 'Orange', 'Pear'];
const mix = [30, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

// console.log(number);
// console.log(number2);
// console.log(fruit);
// console.log(mix);

let val;

// Get Length
val = number.length;
console.log(val);

// Check is Array
val = Array.isArray(number2);
console.log(val);

// Get Single Value
val = fruit[4];
val = fruit[0];
console.log(val);

// Insert into array
fruit[2] = 'Grape';
console.log(fruit);
console.log(val);

// Find index of value
val = mix.indexOf(undefined);
console.log(fruit);
console.log(val);

// Mutating

// Add on to end
number.push(200);

// Add on to front
number.unshift(7);
console.log(number);
console.log(fruit);
console.log(val);

//Take off from end
number.pop();

//Take off from end
number.shift();
console.log(number);
console.log(fruit);
console.log(val);

// Splice Value
number.splice(1, 2);

// Reverse
fruit.reverse();
console.log(number);
console.log(fruit);
console.log(val);

