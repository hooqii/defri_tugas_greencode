// Soal 3.	Buat array string ['apel', 'jeruk', 'pisang'] dan gunakan forEach untuk mencetak setiap buah.

const myArray = [10, 20, 30, 40, 50]

myArray.forEach(element => {
    let multipleElement = element*2
    console.log(multipleElement)
});


// function pyramid(row) {
//     for (let index = 0; index <= row; index++) {
//         let space = " ".repeat(row-index)
//         let stars = "*".repeat(2*index+1)
//         console.log(space+stars)
//     }
// }

// pyramid(5)