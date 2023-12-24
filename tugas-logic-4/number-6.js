function checkUserPassword(username, password) {

    let savedUsername = "Andi"
    let savedPassword = "Andi123"

    if (username == savedUsername && password == savedPassword) {
        console.log("Login berhasil")
    } else {
        console.log("Login gagal")
    }
}

checkUserPassword("Andi", "Andi123")