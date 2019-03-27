var DoubleLinkedList = require("./DoubleLL.js");
var LinkedList = require("./SingleLinkedList");

/*
2.1 Remove duplicates: write code to remove duplicates from an unsorted
linked list
*/

function deleteDuplicates(linkedlist) {
  let dataTracker = [];
  let newLinkedList = new DoubleLinkedList();
  let currentNode = linkedlist.head; //node

  while (currentNode.next != null) {
    if (dataTracker.includes(currentNode.data)) {
      currentNode = currentNode.next;
    } else {
      dataTracker[currentNode.data] = currentNode.data;
      newLinkedList.addNode(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  return newLinkedList;
}

//2.2 find kth to last element of a singly linked list
//pretend like there is not a length property

function kthToLastElement(linkedlist, k) {
  let lengthPointer = linkedlist.head;
  let lengthCounter = 0;
  let kPointer = linkedlist.head;

  for (i = 0; i < k; i++) {
    if (lengthPointer.next === null) {
      return null;
    }
    lengthPointer = lengthPointer.next;
  }

  while (lengthPointer.next != null) {
    lengthPointer = lengthPointer.next;
    kPointer = kPointer.next;
  }

  return kPointer;
}

let linkers = new LinkedList();
linkers.addNode(4);
linkers.addNode(9);
linkers.addNode(19);
linkers.addNode(29);
linkers.addNode(40);
linkers.addNode(78);
console.log(kthToLastElement(linkers, 10));
// console.log(linkers);

//2.3 Delete middle node of singly linked list
//nothing returned
//if even doesn't have to be exact middle, just can't be first
//or last

LinkedList.prototype.deleteMiddleNode = function() {

}

//base cases are that there are 0, 1, or 2 elements in the linkedlist
//
