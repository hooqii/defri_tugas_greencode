let x = [3,1,9,4,9,];
x.sort();
console.log(x)

let arr = [3, 1, 4, 2,2];
arr.sort();
console.log(arr)

let person = {name:"Defri", age:19}
person.address = "Lhokseumawe";
delete person.age;
console.log(person)

// let x = [2,4,6,3,5]
// x.push("Yow")
// console.log(x)

let bintang = "*";

for (let index = 5; index >= 0; index--) {
  console.log(bintang.repeat(index));
}
// Loop untuk menggambar baris
for (let i = 0; i < 4; i++) {
  let baris = "";

  // Loop untuk menggambar kolom
  for (let j = 0; j < 4; j++) {
    // Cek jika ini adalah baris atau kolom pertama, atau baris atau kolom terakhir
    if (i === 0 || i === 4 - 1 || j === 0 || j === 4 - 1) {
      baris += bintang;
    } else {
      baris += " "; // Tambahkan spasi untuk bagian tengah
    }
  }

  console.log(baris);
}

for (let index = 0; index < 5; index++) {
  console.log(bintang.repeat(index))
}

// function pyramid(row) {
//   for (let index = 0; index < row; index++) {
//     let space = " ".repeat(row-index-1)
//     let stars = "*".repeat(2*index+1)
//     console.log(space+stars)
//   }
// }

// pyramid(5)

// function isPolyndrom(word) {
//   let reverseWord = "";
//   for (let index = word.length - 1; index >= 0; index--) {
//     reverseWord += word[index];
//   }
//   return reverseWord == word;
// }

// console.log(isPolyndrom("uu"))


function isPolyndrom(word) {
  let reverseWord = "";
  for (let index = word.length -1; index >= 0; index--) {
    reverseWord += word[index]
  }
  return reverseWord === word
}


console.log(isPolyndrom("alex"))

// function pyramid(row) {
//   for (let index = 0; index < row; index++) {
//     let space = " ".repeat(row-index)
//     let stars = "*".repeat(2*index+1)
//     console.log(space+stars)
//   }
// }

// pyramid(5)


const person = ["Alex", "David", "Alex", "Steven"]
person.push("Brody")

console.log(person)