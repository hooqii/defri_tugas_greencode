function checkMultiple(number) {
    if (number % 3 ==0 && number % 5 == 0) {
        console.log("Kelipatan 3 Dan 5")
    } else if (number % 3 ==0 ) {
        console.log("Kelipatan 3")
    } else if (number % 5 ==0 ) {
        console.log("Kelipatan 5")
    }
}

checkMultiple(15)