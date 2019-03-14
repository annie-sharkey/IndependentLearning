/*
Imposter's handbook

Compilation steps:
    1. lexical analysis
    2. parsing
    3. semantic analysis
    4. optimization
    5. code generation

Stack stores program data and is per thread process
    fast and for value types

Heap is per application process
    used for reference types

compiler reads code and generates what the runtime will execute
compilation happens on command, JIT, or at runtime with an interpreter

Compilation takes in code and makes meaning and puts into memory

******Lexical analysis**********
Analyzes code passed to compiler and splits it into tokens
ex. we read words and use whitespace and punctuation to sep sentence
into words which we then label

separators are like 
    if ( x === 10) {console.log("hello")}
    if is keyword
    ( ) is a separator
    { } is a separator
    "hello" is a string

Lexer is what does this and generates these tokens using tuples:
    {keyword, "if"}
    {paren, }
    {variable, "x"}
    {operator, "==="}
    {number, "10"}
    {left-brace, }
    etc

    Lexer analyzes the lexeme. token is produced


********PARSING************
At this point: lexer has tokenized incoming code string

Parser applies tokens to the rules of the language aka formal grammar
ex. 
x === 10 is relation          console.log("hello") is call
predicate                       then statement
                result: if then

                We know that we have an if statement

*******Semantic analysis*************
Compiler tries to figure out what we're trying to do
    ex. can we resolve predicates to truth

Remem: JS is compiled not interpreted but go through similar steps


*********Lexical scoping************
most OOP languages lexically scoped
scope of a variable extends to the block of code that contains it
changes depending where variables declared

JS is sort of lexically scoped
scopes defined by function blocks

ex. JS:
if(1 === 1) {
    var x = 12;
}
console.log(x;)

this works in JS but x cannot be accessed in another language like C

Take away: JS interpreter does different semantic analysis than a C#
compiler


*********OPTIMIZATION**********
compiler tweaks to make code smaller, faster, and use less memory
ex. reassigning long and meaningful variable names to just a number

doesn't care about "syntactic sugar"

*********Code generation************
Intermediate language output
    some platforms compile code text to intermediate structure
    and then further compile later
    ex. code that runs in a virtual machine like Java will do this
    and later compile down to machine level code

    C# compiles into second language ==> IL

    INTERPRETERS
    ex. dynamic languages like ruby, javascript, python
    JS interpreted on the fly ==> browser loads in and compiles script
    files and holds compiled code in memory unless you reload
    Node does the same thing ==> compiles source files and holds them
    in memory until you restart the node runtime

**********LLVM and GCC *********
https://llvm.org/
collection of modular and reusable compiler and toolchain technologies
different from virtual machines

https://stackoverflow.com/questions/2354725/what-exactly-is-llvm
can be used as a compiler framework where you provide front end (parser and lexer)
and the back end (code that converts LLVM to machine code)
written in C++

GCC is another compiler toolchain

*******Garbage collection********
process of cleaning up the heap

https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)
automatic memory management ==> frees up memory occupied by objects that are no 
longer being used by the program

opposite of manual memory management where programmer specifies the objects to deallocate
and return to the memory system 

disadvantage:
    uses resources to execute/decide what memory to free

Takeaways:
    GC is not free -- can slow program down
    Is undecidable -- not possible to know if a process will complete so you don't 
    know if memory will ever not be needed

Method of GC: Tracing
    When you create an object on the heap, a reference to it exists on the stack

    As program runs, GC looks at root objects and their references and traces those
    references through the stack. 
        Remem: objects may refer to other objects so tracing becomes more challenging

    Looks for objects that are untracable -- objects that are not referenced on the stack
    Deallocates them in memory

    Challenge: what about if there are multiple threads -- one thread may not reference
    an object while another thread may

Method of GC: reference counting
    instead of running a trace, counts the number of references for each object
    when count is 0 the object can be deallocated

    benefits:
        simple (doesn't need trace algorithm), less guesswork to when GC will happen
        because when local reference variables fall out of scope they can be 
        immediately deallocated, Big O of reference counting is O(1) for a single
        object and O(n) for an object graph

*/
