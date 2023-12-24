//Soal 21.	Jika var bilangan = 17;, buat pernyataan if-else untuk mengecek apakah bilangan tersebut merupakan bilangan prima atau tidak.

let number = 17

if (number > 1) {
    let isPrime = true
    for (let index = 2; index < number; index++) {
        if (number % index === 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime) {
        console.log("Is Prime")
    } else {
        console.log("Is Not Prime")
    }
} 

