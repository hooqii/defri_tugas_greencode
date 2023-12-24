//Soal 10.	Jika var tahun = 2023;, buat pernyataan if-else untuk menentukan apakah tahun tersebut adalah tahun kabisat atau bukan.

// Rumus matematika untuk menentukan apakah suatu tahun adalah tahun kabisat adalah sebagai berikut:
// Tahun yang habis dibagi 4 adalah tahun kabisat.
// Tahun yang habis dibagi 100 bukan tahun kabisat, kecuali...
// Jika tahun tersebut habis dibagi 400, maka itu tetap dianggap tahun kabisat.

let year = 2023;

if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log(`${year} Is leap year`)
} else {
    console.log(`${year} Is Not leap year`)
}