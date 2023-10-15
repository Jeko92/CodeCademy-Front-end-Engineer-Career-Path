// STACK

/* const stack = [];

// push
stack.push("dog");
stack.push("cat");
stack.push("bear");

console.log(stack);

// pop
stack.pop();
console.log(stack);

// peek
stack[stack.length - 1]; */

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

const stack = new Stack();

stack.push("dog");
stack.push("cat");
stack.push("bear");

console.log(stack);

stack.pop();

console.log(stack);

stack.peek();

console.log(stack.peek());

console.log("========STACK END=====");

// QUEUE

const queue = [];

// enqueue
queue.push("seahorse");
queue.push("dolphin");
queue.push("whale shark");

// dequeue
queue.shift();
console.log(queue.shift());
console.log(queue);

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const queue1 = new Queue();

queue1.enqueue("seahorse");
queue1.enqueue("dolphin");
queue1.enqueue("whale shark");

console.log(queue1);

queue1.dequeue();
console.log(queue1);
