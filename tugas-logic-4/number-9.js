function isPolindrome(text) {
  let kataBalikan = "";

  for (let index = text.length - 1; index >= 0; index--) {
    kataBalikan += text[index];
  }

  return text === kataBalikan;
}

console.log(isPolindrome("katak"));

