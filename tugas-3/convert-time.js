function convertMinutesToSecond(minute) {
    let oneMinute = 60
    let result = minute*oneMinute
    console.log(`Hasil Dari Konversi ${minute} menit sama dengan ${result} dalam detik`)
}

convertMinutesToSecond(3)

function convertSecondToMinutes(second) {
    let oneMinute = 60
    let result = second/oneMinute
    console.log(`Hasil Dari Konversi ${second} detik sama dengan ${result} dalam menit`)
}

convertSecondToMinutes(3)