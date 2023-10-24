function divideByTwo(n) {
  let countIterations = 0;
  while (n > 1) {
    n = n / 2;
    countIterations++;
  }
  return countIterations;
} // O(log N)

console.log(divideByTwo(1));
console.log(divideByTwo(2));
console.log(divideByTwo(4));
console.log(divideByTwo(8));
console.log(divideByTwo(16));
console.log(divideByTwo(32));
console.log(divideByTwo(64));

function findMax(list) {
  let current = list.head;
  let max = current.data;
  while (current.getNextNode() !== null) {
    current = current.getNextNode();
    let val = current.data;
    if (val > max) {
      max = val;
    }
  }
  return max;
} // O(N)

function sortLinkedList(list) {
  let newList = new LinkedList();
  while (list.head !== null) {
    let currentMax = findMax(list);
    list.remove(currentMax);
    newList.addToHead(currentMax);
  }
  return newList;
} // O(N^2)

//The big O runtime of removing the first element added to a Queue is O(1), and the big O runtime of removing the first element added to a Stack is O(N).

// The big O runtime of Retrieving element from a linked list is O(n);
// The big O runtime of Retrieving element from a Hash Map is: In case of Separate Chaining--> O(N), In case of Open addressing-->O(n)
