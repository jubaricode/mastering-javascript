let val;

const today = new Date();

val = today;
console.log(val);
console.log(typeof val);
val = today.toString();
console.log(val);
console.log(typeof val);

let birthday = new Date('8-16-1994 23:30:25');
console.log(birthday);
birthday = new Date('Augustus 16 1994');
console.log(birthday);
birthday = new Date('8/16/1994');
console.log(birthday);

val = today.getFullYear();
console.log(val);
val = today.getMonth(); // Hitung dari 0 = januari
console.log(val);
val = today.getDate();
console.log(val);
val = today.getHours();
console.log(val);
val = today.getSeconds();
console.log(val);
val = today.getMilliseconds();
console.log(val);
val = today.getTime();
console.log(val);

birthday.setDate(20);
birthday.setMonth(1); // Februari
birthday.setYear(2019);
birthday.setHours(12);
birthday.setMinutes(45);
birthday.setSeconds(50);

console.log(birthday);