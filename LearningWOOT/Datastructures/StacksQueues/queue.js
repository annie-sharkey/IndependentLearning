
/*
Imposter's handbook

Also like an array but can't access values randomly using an index
Add values at one end and retrieve from other
Explicit methods: enqueue and dequeue

FIFO
enqueue an object to the end and dequeue from the front

can implement using two stacks 
how would you do this without calling enqueue 5 times and then dequeue
and then enqueue?

queues used in cache
*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    return this.items.splice(0, 0, item);

    //alternatively this.items.push();
  }

  dequeue() {
    if (this.items.length === 0) {
      return false;
    }
    return this.items.pop();

    //alternatively this.items.shift();
  }

  front() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }

  printQueue() {
    var str = "(end) ";
    this.items.map(item => {
      str += item + " ";
    });
    str += "(front)";
    return str;
  }
}

module.exports = Queue;
