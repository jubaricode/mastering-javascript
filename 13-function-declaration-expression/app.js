// Function Declaration

console.log(greet('Steve', 'Smith'));

function greet(firstName = 'John', lastName = 'Doe') {
    return `Hello, ${firstName} ${lastName}`;
}

// console.log(greet('Jubari', 'Lau'));
console.log(greet('Steve', 'Smith'));


// Function dengan Expression
// Tidak dapat memanggil function sebelum function tsb di buat

// console.log(square()); error
const square = function (x = 8) {
    return x * x;
}
console.log(square());

// IIFEs
// Function akan di panggil sekaligus pada saat function ini di baca

(function (name) {
    console.log(`Hello ${name}`)
})('IDStack');