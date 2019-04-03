/*
Imposter's handbook

Think pushdown machine

Stacks
1. Can't access items randomly using an index
2. Only add and retrieve items in the stack from the top
3. Has three explicit methods: push, pop, and peek

LIFO woot
Push item to top of stack
Peek to see the value at top of stack
Pop that item off the stack

think of stack of plates

helpful when reversing a string
traversing a graph or tree


worst case time complexity for stack methods is O(1)
*/

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items[this.items.length] = item;
    //alterntively: this.items.push(item);
  }

  peek() {
    if (this.items.length - 1 < 0) {
      return false;
    }
    return this.items[this.items.length - 1];
  }

  pop() {
    if (this.items.length - 1 < 0) {
      return false;
    }

    return this.items.pop();
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }

  printStack() {
    var str = "";
    this.items.map(item => {
      str += item + " ";
    });
    return str;
  }
}

module.exports = Stack;
