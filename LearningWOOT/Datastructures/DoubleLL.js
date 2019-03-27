function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this._length = 0;
}

function DoubleNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

//add to END
DoubleLinkedList.prototype.addNode = function(value) {
  const newNode = new DoubleNode(value);

  if (this._length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  //don't have to iterate through every item because we can use tail to access
  this._length++;
};

//position starts at 1
//same as single
DoubleLinkedList.prototype.search = function(position) {
  let counter = 1;
  let currentNode = this.head;

  if (position < 1 || this._length === 0 || position > this._length) {
    return Error(message.failure);
  } else if (position === 1) {
    return currentNode;
  }
  while (counter < position) {
    currentNode = currentNode.next; //this.head.next
    counter++; //2
  }
  return currentNode;
};

//you want to remove at the head
//this.head and this.tail equal the same thing

//revisit tomorrow
DoubleLinkedList.prototype.remove = function(position) {
  if (position < 1 || this._length === 0 || position > this._length) {
    return Error(message.failure);
  } else if (position === this._length) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else if (this._length === 1) {
    //by now we've checked that position would be 1 if it made it here
    //removing head
    this.head = null;
    this.tail = null;
  } else {
    let earlyNode = this.search(position - 1);
    let nextNode = this.search(position + 1);
    earlyNode.next = nextNode;
  }
  this._length--;
};

module.exports = DoubleLinkedList;
