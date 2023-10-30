def first_recurring(given_string):
    counts = {}
    for char in given_string:
        if char in counts:
            return char
        counts[char] = 1
    return None


print(f"Answer is: {first_recurring('dbacba')}")
