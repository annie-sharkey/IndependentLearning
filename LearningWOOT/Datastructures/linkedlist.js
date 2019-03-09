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

*/