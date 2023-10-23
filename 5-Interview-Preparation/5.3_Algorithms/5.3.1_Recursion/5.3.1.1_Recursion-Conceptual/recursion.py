value = 13


def countdown(value):
    if value <= 0:
        print("done")
    else:
        print(value)
        countdown(value-1)  # recursive step


# recursion_concept = countdown(13)
# recursion_concept


word = "Hello"


def speller(word):
    if (len(word) <= 0):
        print("All done")
    else:
        print(word[0])
        speller(word[1:])


spelled_word = speller(word)
spelled_word
