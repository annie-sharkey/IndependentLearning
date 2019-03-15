/*
https://www.geeksforgeeks.org/functional-programming-paradigm/
focuses on what to solve instead of how to solve
uses expressions instead of statements
therefore is DECLARATIVE


expression evaluated to produce a value
statement is executed to assign variables

based on lambda


**************Features of functiona programming******

1) Immutability
In functional you don't have objects, classes, or state like OO
Only functions that transform things

(ex. in elixir:)
Ex. in friend = %{name: "Clara"}
you cannot do friend.name = "Mike"

you can ask the Map library to update the map
ex. friend = Map.put(friend, :name, "Mike")

better way to write: 
%{name: "Clara"} |> Map.put(:name, "Mike") |> IO.inspect
    uses the pipe operator, pipes the result of the first argument into the next
    one

Creates a new map, doesn't alter old map

*******TRANSFORMING DATA********
--> transform by passing through functions
--> prefer smaller functions
--> treat functions the same as variables

Why is immutability a pro?
    Bugs in OO caused by incorrect state
    Especially if we're using global variables that can impact entire code or
    our code is subject to outside conditions we weren't thinking of

What does it mean for functional languages to not have state?
    In javascript we might have an array that we hold in state in a constructor
    for example and say this.items = [] and then add items to it overtime
    --> In functional we can't hold onto this array and in order for an additem()
    function to work we have to pass the function all data including the items
    we already have in the array

*****Side effects and purity********
Stem from immutability

Side effect refers to when something else happens as a result of your function
being invoked
    Ex. working with a db is a necessary side effect because you also change
    the state of the db even though it's outside the scope of your function

The more you have side effects the less pure your code is
    Purity -- how much is your code interacting with outside work?
    Functional prefers purity because it's easier to test

****Currying******
same as lambda ==> breaking up arguments in function
powerful when you use partial application

===> Investigate functors and monads
https://hackernoon.com/two-years-of-functional-programming-in-javascript-lessons-learned-1851667c726

https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5
functional programming is declarative ==> focuses on what program should
accomplish without specifying how to achieve result

(vs. imperative where you describe how books operate)

Two ways of adding a new property:
ex. imperative
for(etc) {
    books[i].lastRead = new Date();
}
    imperative because we go over each item using the for loop and indexing
    describes how to operate

ex. declarative
books.map((book) => {
    books.lastReadBy = 'me';
    return book;
})
    declarative because we let map do the behind the scenes and we say what
    we want to accomplish


Pure functions are mathematical functions of taking in input and only alteration
is the output ==> the input itself is not altered
    Math.random() not a pure function because output not the same for every input
    Math.min(1, 2) is a pure function

FUNCTIONAL PROGRMAMMING
    pure functions won't change things outside of scope
    easier to test because we're not concerned with state

Array functions in JS ==> think of find, map, reduce, every, some, filter
    take care of how stuff is done
USE function chaining!


*/
