// Soal 8.	Jika var temperature = 25;, buat pernyataan if-else untuk menentukan apakah suhu tersebut termasuk kategori "Panas", "Sejuk", atau "Dingin" (dengan batas 20 dan 30).

let temperature = 25;

if (temperature < 20) {
    console.log("Dingin")
} else if (temperature >=20 && temperature <= 30){
    console.log("Sejuk")
} else {
    console.log("Panas")
}