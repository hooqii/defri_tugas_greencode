function calculateEvenNumber(number) {
    let result = 0
    for (let index = 2; index <= number; index+=2) {
       result+=index
    }
    console.log(result)
}

calculateEvenNumber(10)