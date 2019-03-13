/*
Creational pattern

https://www.dofactory.com/javascript/singleton-design-pattern
Limits the number of instances of a particular object to just one
Single instance ==> singleton

System wide actions are coordinated from a single central place ex. database
connection 

Ensure a class only has one instance and provide a global point of access to it
Can only be instantiated one time
Repeated calls to constructor return the same instance

https://robdodson.me/javascript-design-patterns-singleton/
Remem: in OO global variables are disliked because they break encapsulation

Simplest example of a singleton:
*/
var person = {
  name: "Annie",
  age: 20,
  sayAge: function() {
    return this.name + "'s age is " + this.age;
  }
};

/*
When is singleton useful?
    what if we have js functions on a page unattached to anything
    AT RISK of being overwritten if a new function defined, polluting
        global space

Instead: make a global object from which code branches off 
*/

//object literal -- properties separated by commas
var Parent = {};
Parent.sayHello = function() {
  return "Hello!";
};
Parent.finishFood = function() {
  return "kid eat food";
};
console.log(Parent.sayHello());
console.log(Parent);

/*
try to avoid using singletons ==> might signal that we need to reevaluate
our code design
may indicate that our code is spread across too many modules



https://coryrylan.com/blog/javascript-module-pattern-basics
Alternative to singletons: MODULES

Module pattern creates encapsulation, most common

Creating a module
    starts with anonymous closure ==> functions that wrap our code
    and create an enclosed scope around it

    keeps privacy/state within that function

    is immediately invoked

    strict mode recommended (remem: everything must be declared ex. y = 2
        is not acceptable, needs var)
*/
(function() {
  console.log("immediately invoked function expression invoked");
})();

//export by doing var myModule = the above

//using closures creates private methods and state
