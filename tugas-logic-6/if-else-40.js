let word = "level"
let reverseWord = ""

for (let index = word.length -1; index >= 0; index--) {
    reverseWord += word[index]
}

console.log(word === reverseWord)