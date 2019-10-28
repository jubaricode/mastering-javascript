let val;

// Number to String
val = String(123);
val = String(5+5);

// Boolean to String\
val = String(false);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4,5]);

// toString()
val = (5).toString();
val =(true).toString();


// String to Number
val = Number('51.30');

// Bool to Number
val = Number(true);
val = Number(false);

val = Number('Hello');
val = Number(['1,2,3']);

val = parseInt('100.31');

val = parseFloat('100.31')

// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));


// Perhitungan dengan String menjadi concatenated

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);


