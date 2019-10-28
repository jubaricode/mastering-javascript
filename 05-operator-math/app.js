const num1 = 100;
const num2 = 50;

let val;


// Simple math operator
val = num1 + num2; // penjumlahan
val = num1 * num2; // perkalian
val = num1 - num2; // pengurangan
val = num1 / num2; // pembagian
val = num1 % num2; // modulus

// Math Object

val = Math.PI;
val = Math.E;
val = Math.round(3.4); // Bulat ke bawah dan ke Atas
val = Math.ceil(2.4); // Bulat Ke Atas
val = Math.floor(2.7); // Bulat ke Bawah
val = Math.sqrt(64); // Nilai Akar Quadrat
val = Math.abs(-5); // Mengubah nilai menjadi positif
val = Math.pow(8,2); // Memangkat kan 8 dengan 2
val = Math.min(2,4,56,34,23,4,-9);  // Nilai paling rendah
val = Math.max(2,4,56,34,23,4,-9);// Nilai paling tinggi
val = Math.random(); // Random
val = Math.random() * 50; // Nilai Random 0 - 50  sampai 49
val = Math.random() * 50 + 1; // Nilai Random sampai 50
val = Math.floor(Math.random() * 50 + 1); // Nilai Random sampai 50
console.log(val);

