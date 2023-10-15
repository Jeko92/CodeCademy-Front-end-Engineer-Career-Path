const LinkedList = require("./LinkedList");

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is full");
    }
  }

  pop() {
    //if (this.size > 0) {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      console.log("Stack is empty!");
    }
  }

  peek() {
    //if (this.size > 0) {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;