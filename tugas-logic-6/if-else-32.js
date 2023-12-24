// Soal 12.	Jika var karakter = "A";, buat pernyataan if-else untuk menentukan apakah karakter tersebut adalah huruf vokal atau konsonan.

let char = "A"

let toLowerCase = char.toLowerCase()

if (toLowerCase == "a" || toLowerCase == "e" || toLowerCase == "i" || toLowerCase == "o" || toLowerCase == "u") {
    console.log("Huruf Vocal")
} else {
    console.log("Huruf Konsonan")
}