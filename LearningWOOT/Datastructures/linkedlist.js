/*
Linked Lists imposter's handbook

Two types: singly and doubly linked

Singly ==> has a set of nodes in memory that have two elements
1. the value you want to store
2. a pointer to the next node in line

Doubly linked list ==> same but has an additional pointer to the 
previous node

******Operations*****
Nodes that point to each other don't need to live next to each other
Can grow and shrink as necessary

you can insert values into the middle of the list by resetting a few pointers
same with deleting

Downside: to find item you want requires traversing the list O(n)
Arrays let you do O(1) if you know the index

Linked lists null terminated ==> if a node's pointer is null that's the end of the
list

First item in LL is the head
the rest is the tail

Benefit: ability to grow and shrink as necessary
Iteration thought of as traversal because you don't know when LL will end
might end up using a while loop


https://www.geeksforgeeks.org/data-structures/linked-list/
Linear data structure, elements not stored at contiguous memory locations
    Instead items linked using pointers 
    Linked list contains nodes where each node contains a data field and a reference (link)
    to the next node in the list

Like array: is linear
Unlike array: linked elements not stored at contiguous locations, instead use pointers

General challenges of arrays
    Size of the array is fixed
    Hard to insert into an array because you must move all items to the right -- shift

Benefits of linked list:
    Dynamic size
    Ease of insertion/deletion

Problems of LL:
    random access not easy
        can't do binary search, instead access elements sequentially from first node
    Extra memory space required for the pointer
    Not cache friendly

Head is the first node 
Each note has data and a pointer/reference to the next node

https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
*/

//remem no classes in javascript
//so in java it would have been
//  class linkedlist
//      Node head;
//      node class /constructor

//******** */DOUBLY LINKED LIST ==> NEXT AND PREVIOUS*********
//what does linkedlist overall need to track
function LinkedList() {
  this.head = null; //these will be nodes ==> this.head is a node so this.head.prev goes into the node
  this.tail = null;
  //idea: don't put methods inside of the LL constructor
  //if we create many LL objects then methods will be repeated everytime
  //add to the prototype and LL will inherit
}

function Node(element, next, prev) {
  this.data = element;
  this.next = next; //node
  this.prev = prev; //pointers to, node
}

//LL methods
LinkedList.prototype.addHead = function(value) {
  //head will be a node
  const newNode = new Node(value, this.head, null);
  if (this.head) {
    //if the head already has a value
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
    //if nothing there then the head and the tail are the same
  }
  this.head = newNode; //regardless set the head of the linkedlist
  //to the node we like
};

const list = new LinkedList();
list.addHead(1); //when we just add one item to the head there is no next node or previous node
//but the tail node will be the same as the head node
console.log(list);

list.addHead(2); //now i expect that 2 will be the head
//expect: data 2 (head), next is data 1, prev is null
//then data 1 follows it so, next null, prev data 2
console.log(list);
