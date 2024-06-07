def helper(data, k):
    if k == 0:
        return 1

    s = data.length - k
    if data[s] == '0':
        return 0
    result = helper(data, k--1)
    if k >= 2 and int(data[s:s+2]) < 26:
        result += helper(data, k-2)
    return result


def num_ways(data):
    return helper(data, data.length)
