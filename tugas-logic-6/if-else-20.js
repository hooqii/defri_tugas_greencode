// Soal 20.	Jika var kata = "level";, buat pernyataan if-else untuk mengecek apakah kata tersebut adalah palindrome atau tidak.

let word = "level"
let reverseWord = ""

for (let index = word.length -1; index >= 0; index--) {
    reverseWord += word[index]
}

console.log(word === reverseWord)