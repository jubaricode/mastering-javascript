const firstName = 'Steward';
const lastName = 'Hodges';
const age = 35;
const phar = 'Hello-my-name-is-' + firstName + '-and-I-am-' + age;
const tags = 'html, css, javascript, php';

let val;

val = 'Hello myname is ' + firstName + ' and I am ' + age;

// Concatenation
val = firstName + ' ' + lastName; // Single Quote with White Space
val =

// Append dengan variable yang sama

val = 'Marshall ';
val += 'Mathers';  // +=

// Escaping
val = 'That\'s awesome, I can\'t wait it';
val = "That's awesome, I can't wait it";

// Lenght
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

// indexOf()

// slice
val = firstName.slice(0,4); // Stew
val = firstName.slice(-3); // ard

// Split
// val = phar.split(' ');
val = phar.split('-');
val = tags.split(',');

// replace()
val = phar.replace('Hello', 'Hi');

// includes 
val = phar.includes('Hello'); // use for validation

console.log(val);