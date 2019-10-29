// Global Scope
var     a = 1;
let     b = 2;
const   c = 3;

// function local(){
//     // Local Scope
//     var     a = 4;
//     let     b = 5;
//     const   c = 6;

//     console.log('Local Scope: ', a,b,c); 
// }
// local();  // output 4 5 6
// console.log('Local Scope: ', a,b,c); // Output :  1 2 3

// if(true){
//     // Block Scope
//     var     a = 4;
//     let     b = 5;
//     const   c = 6; 
// }
// console.log('Global Scope: ', a, b, c);  // Output: 4 2 3

//  LET
// for(let a = 0; a < 10 ; a++){
//     console.log(`Loop: ${a}`); // Output :  Loop: 0 sampai 9
// }
// console.log('Global Scope: ', a, b, c);  // Output : 1 2 3

// VAR
// for(var a = 0; a < 10 ; a++){
//     console.log(`Loop: ${a}`);
// }
// console.log('Global Scope: ', a, b, c);  // Output: 10 2 3