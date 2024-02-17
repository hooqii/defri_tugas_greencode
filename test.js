function pyramid(row) {
    for (let index = 0; index < row; index++) {
        let space = " ".repeat(row - index);
        let stars = "*".repeat(2 * index + 1);
        console.log(space+stars)
    }
}

pyramid(5);