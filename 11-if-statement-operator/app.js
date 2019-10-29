// if (true){
//     do something();
// }else{
//     do something();
// }

const id = '200';

// // EQUAL to

// if (id == 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if (id != 100) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// EQUAL TO VALUE & TYPE
// if (id === '100') {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// if (typeof id != 'undefined') {
//     console.log(`ID value is: ${id}`);
// } else {
//     console.log('ID Value is NULL');
// }

// //Uncaught TypeError: Assignment to constant variable.
// if (id = 200) {
//     console.log('CORRECt');
// }

// // Greater or Less than 
// if (id <= 200) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// const color = 'red';

// if (color == 'red') {
//     console.log('Color is red');
// } else if (color == 'blue') {
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red and blue');
// }

// Logical Operators

const name = 'Alpha';
const age = 15;

if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age > 13 && age < 19) {
    console.log(`${name} is a tennager`);
} else {
    console.log(`${name} is an adult`);
}