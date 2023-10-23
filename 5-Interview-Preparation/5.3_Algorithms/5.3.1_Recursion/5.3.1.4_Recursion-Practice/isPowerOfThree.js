const isPowerOfThree = (n) => {
  if (n <= 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    return isPowerOfThree(n / 3);
  }

  return false;
};

const checkNumber = isPowerOfThree(27);
console.log(checkNumber);
