/*
Linked lists are linear

Trees have 0 or more child nodes

Each tree has a single root node
Every child of the tree descends from this root node and has
only one parent

****Can involve traversing using recursion which is expensive with space complexity
(Remember big O example where I got confused with time complexity because I thought
    time complexity was log because of how the levels grow vs. the nodes, but
    that in that type of search problem we actually had to iterate over all
    the nodes and this made it a O(n) problem)
Every time you recurse the stack has to store the values for that scope until
you run out of space

Can traverse a tree in other ways than going over 
each item with different algorithms


********Binary trees***********
Has 0, 1, or 2 child nodes but only 1 parent
Can represent many things including decisions
Each node represents a state of yes or no decision
The level of the tree represents a logarithmic value 
    Level 0 we have log2(0) = 1 Node
    Level 1: log2(1) = 2
    Level 2: log2(2) = 4


********Heap*************
Inverted tree with a set of interconnected nodes that store data in a particular
way ==> heap property.

Each child node belongs to a parent node that has a greater priority/value called
a max heap. A min heap would be one where the parent value has a val less
than all of its children

Max heap: every node on a top level has a greater value than every node
on the next level down

How do we use a heap?
    Can be used in any algorithms where ordering is required
    Arrays are random 
    Linked lists change dynamically but finding stuff is O(n)

    Heaps ==> can't do O(1) access on a single node and each node knows
    nothing about its children
    But you can do a traversal to find what you need
    Heaps great for comparative operations

    Heaps great for data storage, graphic algorithms, priority queues,
    and sorting algorithms

    Are pre sorted ==> fast performance

********binary search tree***********
like a heap organized on the value of nodes with a left and right value priority

rules:
    1. child nodes in the tree to the right have a value greater than current
    node
    2. all child nodes in the tree to the left must be less than the current
    node
    3. node can only have two children


********digital tree (trie)***************
specialized tree used in searching, most often with text
==> lets you know if a word or part of a word exists in a body of text
look at diagram on page 126


*******Graphs********
https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/

Non linear data structure with nodes and edges
    Nodes aka vertices
    Edges are lines that connect any two nodes in a graph

    Def: a graph consists of a finite set of vertices (nodes) and set of edges
    which connect a pair of nodes

A tree is an undirected graph in which any two vertices are connected by
exactly one path

Graphs represent networks like paths in a city or telephones
    Social networks ==> linkedin, facebook
        ex. facebook: each person is a vertex (node)
            each node contains info about each person

Directed graph:
    has notion of direction applied to edges
        ex. useful for describing traffic flow

Undirected graph:
    ex. traffic flow like that of a highway
    everything is bidirectional

Weighted graph:
    values applied to parts of graph like the vertex
    edge weighted graph has values on edges

Cycles:
    vertices connected in a circular fashion

Directed acyclic graphs (DAGS):
    don't have vertices that connect in a circular fashion
    think decision trees, data flow diagrams, trees, linkedlists

*/
