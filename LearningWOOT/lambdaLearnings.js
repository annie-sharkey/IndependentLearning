/*
********Lambda Calculus**********

Lambda Calculus provides a way to study computations using functions. 

Lambda Calculus uses only functions, no data types, to represent fundamental features of programming
like numbers or boolean logic. 

An expression in Lambda calculus can be one of three things: expression = variable || abstraction || application. 
    1. Variable x is an expression itself
    2. Abstraction = λ(variable).(expression). For example, λx.x.
    3. Application ==> (expression1)(expression2)

Let's dig into each of the items above.
Variables are expressions themselves and are represented by x, y, z, etc.

Think of an abstraction like the definition of a function. In λx.x:
    λ signals "the following is a function!"
    x (the x directly after λ and before .) is your argument that will be passed into the body...
    .x is the body of your function. This is where arguments are entered and stuff happens/is returned.

    Think of λx.x like: function stuff(x) {return x};

An application where application = (expression)(expression) might consist of two functions
or a function and a variable or even more than two functions with multiple variables. We can often reduce applications
using different strategies. 

********Basics of abstractions******

Syntax:
    Abstractions preferably do not take multiple arguments at once like: λxy.x+y   <==== NO

        It can be helpful to represent lambda calculus in a language we know like javascript. 
        In javascript, this might be represented as: */
const add = (x, y) => x + y;

/*
        Instead, break out the above into λx.λy.x+y 
        In javascript we can represent this as: */
const addLambdaNotation = x => y => x + y;
console.log(
  addLambdaNotation(1)(2)
); /*remember: lambda doesn't have datatypes so passing
        numbers into the function is for purposes of demonstration

        When you break a lambda function with multiple arguments into a chain of lambda functions
        with a single argument each, this is called *currying*. 
 */

/*

These are called closed lambda expressions. Every variable that appears is defined by a lambda to its left. 
A free variable is a variable in the body of an expression that has not been defined. 


*********Simplifying Applications********
(https://www.cs.cmu.edu/~anupamg/251-notes/lambda_calculus.pdf)

Think of (expression)(expression) as saying E(A) where A is an input to the expression E that produces
an output. This is used to simplify complicated applications.

    In the example (λx.x)(3) we are saying E(3) where everywhere in the body of the function we replace
    x with 3 which returns 3. 

    Another way of saying replace all instances of x with three is through the following notation:
     λx[x:=3]

     When we are substituting we move left to right so in addLambdaNotation, when we call the function
     and pass in numbers as follows: */
addLambdaNotation(1)(2);

/*
     We replace x with 1 and y with 2. 

Order of operations and parenthesis matters. The following have two different outcomes:

=======> λx( λy.y (x)) simplifies to 

        Answer: λx.( y[y:=x])
                λx.x

       vs.

=======> λx.λy.y(x) simplifies to 

        Answer: (λy.y)[x:=x]
                λy.y


Sometimes applications won't have clearly defined parenthesis. It can be helpful to add them for a visual.
    Applications are left justified e1e2e3 ==> (e1e2)e3.
    Lambdas are right justified where λx.e1e2 ==> λx.(e1e2)     note: this differs from (λx. e1)e2

=======> Add parenthesis to: λx.λy.xyx
         Answer: λx.(λy.xyx)
                 λx.(λy.(xy)x)

=======> Add parenthesis to: λxy.x(λz.zy)yyλz.xy(xz)
         Answer: λxy.((((x(λz.(zy)))y)y)λz.((xy)(xz)))


        

A bound variable in an abstraction body is one that is defined to the left.
This is also called a closed lambda expression.
    ex. λx.xy  ==> x is bound aka defined in λx.
A free variable is one that is not defined.
    ex. λ.xy ==> y is a free varible

This is a closed lambda expression: λx.λy.x
Every variable in the body is defined. However, if we simply have λy.x we now have a free variable since x
is never defined. 


*********Reductions***********
https://www.cs.colorado.edu/~bec/courses/csci5535-s09/slides/lecture17.6up.pdf
http://www.cs.yale.edu/homes/hudak/CS201S08/lambda.pdf

Favorite reading: https://www.cs.cornell.edu/courses/cs6110/2016sp/lectures/lecture04.pdf

1) Alpha Reductions
2)Beta Reductions

Alpha Reductions-- we are renaming bound variables, but you cannot rename free variables
    so λx.x = λy.y and λy.xy = λz.xz

    But λy.xy != λy.zy


Beta Reductions-- Simplifying! There are several strategies you can follow. Lambda calculus itself
is nondeterministic. However, we need reduction strategies because our languages are deterministic
and we need a strategy to solve this nondeterminism.

(Redex means reducible expression)

    a) Normal order reduction: choose left most, outer most redex until no more redexes
        ==> Call by name when the inside the body of a normal order reduction is not performed

    b) Applicative order reduction: left most, inner most redex
        ==> Call by value when we don't continue reducing applicative order reductions


    Lazy evaluations-- when the arguments to a function are not evaluated until they are needed
    CBV is most common in programming languages

            Def value: λ term for which no B reductions are possible 
            Under CBV, functions may only be called on values-- args must be fully evaluated

=======> CBV reduction where we consider 3 and succ (the successor function) to be primitive constants
            reduce: (λx.succx)((λy.succy)3)
            Answer: (λx.succx)((λy.succy)3) -1-> (λx.succx)succ3 -1-> (λx.succx)4 -1-> succ4 -1-> 5


=======> CBN (defer evaluation of arguments until as late as possible) 
            reduce: (λx.succx)((λy.succy)3)
            Answer: succ((λy.succy)3) --> succ(succ(3)) --> succ4 --> 5

Return to favorite reading to review equivalence


********Using lambda calculus to represent data types*********
https://www.cs.colorado.edu/~bec/courses/csci5535-s09/slides/lecture17.6up.pdf

When representing datatypes with lambda, we encode the "behavior" of values and not their structure.

ex. when representing booleans, we make a binary choice-- given 2 choices, select one

=======> Represent TRUE
         Answer: λa.(λb.a) aka*/
const TRUE = a => b => a;
/*
=======> Represent False
         Answer: λa.λb.b */
const FALSE = a => b => b;

/*
revisit if statements

********Recursion ==> revisit ***************


************Other learnings*********


Lambda and anonymous functions are not the same thing.
(https://gist.github.com/ericelliott/414be9be82128443f6df)
(some of this is debated)

    Defining feature of lambdas are that they are used as data. "That is, 
        1) the function is passed as an argument to another function, 
        2) returned as a value from a function, or
        3) assigned to variables or data structures."

    A function with a name can still be considered a lambda if it has one of these features.
    
    A function can be anonymous, but if the function itself is not used as data, then it is not
    considered a lambda. 



To read:
https://www.cs.rochester.edu/~brown/173/lectures/functional/lambda/Lambda1.html
https://courses.cs.washington.edu/courses/cse505/99au/functional/applicative-normal.pdf

Need to study more in depth:
Turing Machines
Lambda calc with recursion review
More on call by value and call by name

-------------------------------






*/
