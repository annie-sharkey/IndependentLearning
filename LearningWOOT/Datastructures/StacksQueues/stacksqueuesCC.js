var Stack = require("./stack.js");

//3.2 stack that returns minimum element
class StackWithMin {
  constructor() {
    this.items = [];
    this.min = []; //treat this like another stack
  }

  push(item) {
    this.items[this.items.length] = item;

    if (this.min.length === 0) {
      this.min.push(item);
    } else {
      var minVal = this.min[this.min.length - 1];
      if (item < minVal) {
        this.min.push(item);
      }
    }
  }

  getMin() {
    if (this.min.length === 0) {
      return false;
    }

    return this.min[this.min.length - 1];
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

    if (this.min[this.min.length - 1] === this.items[this.items.length - 1]) {
      this.min.pop();
    }

    return this.items.pop();
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }
}

// var stackers = new StackWithMin();
// stackers.push(6);
// stackers.push(7);
// stackers.push(3);
// stackers.push(2);
// stackers.push(9);
// stackers.push(8);
// stackers.pop();
// stackers.pop();
// stackers.pop();
// console.log(stackers.items);
// console.log(stackers.min);
// console.log(stackers.getMin());

//3.3 stack of plates ==> imagine a stack of plates. if gets too high it will fall. would need
//a new stack when old stack exceeds a threshold

//pretend capacity is 10 items
class SetOfStacks {
  constructor() {
    this.setOfStacks = [];
    this.currentStack = [];
  }

  push(item) {
    if (this.currentStack.length < 10) {
      this.currentStack.push(item);
    } else {
      this.setOfStacks.push(this.currentStack);
      this.currentStack = [];
      this.currentStack.push(item);
    }
  }

  pop() {
    if (this.currentStack.length > 0) {
      this.currentStack.pop();
    } else {
      var oldStack = this.setOfStacks.pop();
      this.currentStack = oldStack;
      this.currentStack.pop();
    }
  }

  //index is a specific sub stack ==> pop from a stack not the overall index
  popAt(index) {
    if (index >= this.setOfStacks.length) {
      return false;
    }
    var desiredStack = this.setOfStacks[index];
    desiredStack.pop();
  }
  //if we were to left shift everything the trade off is the time complexity increases
  //O(n) for every element
}

var set = new SetOfStacks();
set.push(9);
set.push(9);
set.push(9);
set.push(9);
set.push(9);
set.push(9);
set.push(9);
set.push(9);
set.push(2);
set.push(11);
set.push(8);
set.push(9);

// console.log(set.setOfStacks);
// console.log(set.currentStack);

//3.4 implement a myqueue class which implements a queue using two stacks

class MyQueue {
  constructor() {
    this.normal = new Stack();
    this.backwards = new Stack();
  }

  enqueue(item) {
    this.normal.push(item);
  }

  dequeue() {
    while (this.normal.isEmpty() != true) {
      var popVal = this.normal.pop();
      this.backwards.push(popVal);
    }

    this.backwards.pop();

    while (this.backwards.isEmpty() != true) {
      var popVal = this.backwards.pop();
      this.normal.push(popVal);
    }
  }
  //thought for improvement: don't reverse the stack everytime
  //only reverse when the backwards or normal stacks are empty
  //in method copy the other stack and then pop and push
}

var myQ = new MyQueue();
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(4);
myQ.enqueue(5);
myQ.dequeue();
myQ.dequeue();
// console.log(myQ);

//3.5 sort stack ==> smallest items should be on top
//can use another stack but not another data structure

//this is the beginnings of sorting algortihm called
//recursively --> prompt says can use only one other stack
// Stack.prototype.sortStack = function() {
//   originalStack = this.items;

//   while (originalStack.isEmpty() != true) {
//     var highStack = new Stack();
//     var lowStack = new Stack();

//     var currentPop = originalStack.pop();

//     var nextPop = originalStack.pop();

//     if (currentPop > nextPop) {
//       highStack.push(currentPop);
//     } else {
//       lowStack.push(currentPop);
//     }

//     currentPop = nextPop;
//     nextPop = originalStack.pop();
//   }

// };

let sortStack = function(stack) {
  var sortedStack = new Stack();
  var current = stack.pop();
  if (sortedStack.isEmpty() === true) {
    sortedStack.push(current);
  }

  while (stack.isEmpty() !== true) {
    current = stack.pop();
    if (current < sortedStack.peek()) {
      sortedStack.push(current);
    } else {
      console.log("entered");
      var count = 0;
      console.log(sortedStack.peek());
      console.log("current: " + current);
      while (current > sortedStack.peek() && stack.isEmpty() !== false) {
        // var newCurrent = stack.pop();
        var sortedPop = sortedStack.pop();
        stack.push(sortedPop);
        count = count + 1;
      }
      sortedStack.push(current);
      while (count > 0) {
        var popStack = stack.pop();
        sortedStack.push(popStack);
        count--;
      }
    }
  }
  console.log(stack);
  console.log(sortedStack);
  return sortedStack;
};

var st = new Stack();
// st.push(10);
st.push(11);
st.push(5);
st.push(2);
st.push(8);
sortStack(st);
