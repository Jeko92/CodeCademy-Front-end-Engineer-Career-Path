function eggDrop(n, d = 1) {
  if (n <= 0) {
    return d - 1;
  } else if ((n) => 1) {
    return eggDrop(n - d, ++d);
  }
}

console.log(eggDrop(2));
console.log(eggDrop(100));

// Leave this here so we can test your code
module.exports = eggDrop;
