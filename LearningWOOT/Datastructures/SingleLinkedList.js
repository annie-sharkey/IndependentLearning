function Node(data) {
  this.data = data;
  this.next = null; //node
}

function LinkedList() {
  this.head = null; //node
  this._length = 0; //number of nodes, every instance of LL doesn't necessarily start
  //with a node so we initialize with null and 0
}

LinkedList.prototype.addNode = function(value) {
  const newNode = new Node(value);
  let currentNode = this.head;

  if (this._length == 0) {
    this.head = newNode;
    this._length++;
    return newNode;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  this._length++;
  return newNode;
};

//position starts at 1
LinkedList.prototype.search = function(position) {
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

LinkedList.prototype.remove = function(position) {
  if (position < 1 || this._length === 0 || position > this._length) {
    return Error(message.failure);
  } else if (position === this._length) {
    this.head = null;
    this._length--;
  } else {
    this.search(position - 1).next = this.search(position + 1);
    this._length--;
  }
};

LinkedList.prototype.insertAt = function(position, node) {
  node.next = this.search(position + 1);
  this.search(position - 1).next = node;
  this._length++;
};

module.exports = LinkedList;
