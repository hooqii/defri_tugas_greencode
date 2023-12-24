function isLeapYear(year) {
    if (year % 4 == 0 ) {
        console.log("Tahun kabisat true")
    } else if (year%100 == 0 && year%400 != 0){
console.log("tahun kabisat")
    } else{
        console.log("bukan tahun kabisats")
    }
}