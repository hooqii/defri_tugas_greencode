// Soal 18.	Jika var nilai = 45;, buat pernyataan if-else untuk menentukan grade yang sesuai (A, B, C, atau D) berdasarkan rentang nilai.

let score = 45

if (score >= 90 && score <= 100) {
    console.log("Grade A")
} else if(score >= 80 && score < 90) {
    console.log("Grade B")
} else if(score >= 70 && score <80) {
    console.log("GRADE C")
} else if( score <70) {
    console.log("GRADE D")
} 