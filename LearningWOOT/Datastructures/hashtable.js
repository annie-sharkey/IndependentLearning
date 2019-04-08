/*
IH

Arrays fast for reading data
Linked lists good for writing data and flexibility
Hash table like a combo of the two

Stores data using a computed index-- the result is always an integer
you generate a key that is the index
the key/value pair is referred to as a bucket or slot

Benefit
    Speed ==> quick access to certain values
    Their value is their index so hash table reads are O(1)
    hash the table and create the key

Problem: formula for creating key can sometimes create collisions when key the
same

Open addressing ==> resolves collision by finding next available slot
then drops value there
Do an O(n) scan until you find next available value

    Leads to clustering ==> stuff gets pushed to later
    Turns fast hash table into O(n) search

Separate chaining ==> combines arrays and linked lists
    When a key is hashed it's added to an array that points to a linked list
*/