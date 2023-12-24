//Soal 50.	Jika var nilai = 68;, buat pernyataan if-else untuk menentukan grade yang sesuai (A, B, C, atau D) berdasarkan rentang nilai.

let value = 68;

if (value >= 90 && value <= 100) {
  console.log("A");
} else if (value >= 80 && value < 90) {
  console.log("B");
} else if (value >= 70 && value < 80) {
  console.log("C");
} else if (value <= 70) {
  console.log("D");
}