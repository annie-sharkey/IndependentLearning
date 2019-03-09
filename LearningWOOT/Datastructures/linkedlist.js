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
*/

