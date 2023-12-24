//Soal 15.	Jika var nilai1 = 80; dan var nilai2 = 85;, buat pernyataan if-else untuk menentukan nilai maksimum di antara keduanya.

let number1 = 80
let number2 = 85 
let maksimum ;

if (number1>number2) {
    maksimum = number1
} else {
    maksimum = number2
}

console.log("Nilai maksimum adalah:",maksimum)



let numbers = {
    number1 : 80,
    number2 : 85,
    max: function(){
        return Math.max(this.number1, this.number2)
    } 
}

console.log("Maximum value is:",numbers.max())