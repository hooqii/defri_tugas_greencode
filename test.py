def is_polyndrom(word):
    reverse_word = ""
    for index in range(len(word)-1,-1,-1):
        reverse_word += word[index]
    return reverse_word == word

print(is_polyndrom("uu"))
