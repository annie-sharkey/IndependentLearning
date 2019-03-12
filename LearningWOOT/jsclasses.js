/*
remem: static methods belong to the class itself not the instance

state nameOfMethod() {
    return ...
}

does not have private methods

can have getters and setters

https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677
Can either use traditional function ClassName(name) {
    this.name = name;
} structure that can also have methods in it

issue: if you have methods in ClassName then that gets copied for every 
instantiation of a new object
    ==> redundant

remem: work around is using prototype and adding methods to prototype
can also add new properties to prototype

Challenges with prototype:
    1. if you have a property you want to be the same across for example
    the year across all cars you watn to = 2014 and you change the year 
    in one instance (primitive), this change will not persist in other 
    instances of the car object
    2. if on one object you want to add a color option and this is a property
    in prototype and you push a new color, all instances of the object
    will access this new color option

*/

class Animal {
  constructor(type, color, age) {
    this.type = type;
    this.color = color;
    this.age = age;
  }

  getType() {
    return "This animal is a " + this.type;
  }

  setType(type) {
    this.type = type;
  }
}

let dog = new Animal("dog", "orange", 2);
//dog.setType("cat");
dog.type = "Cat";
console.log(dog);

/*
Differences:
    class needs new keyword
    function constructor could call like a normal function

if you don't set the constructor, class automatically adds it
class methods are non enumerable
code in a class is strict
class declarations are not hoisted so you have to declare class before 
    instantiating an object
    (hoisting normally moves declarations to top of scope so you can use
        a variable/function before it is declared)

    (function constructor supports hoisting)

can have static methods that are declared on the class itself
(different than defining on prototype)

uses extends
don't forget super()

****Class is just built on top of prototype ==> overall takeaway is that they do
similar things


https://www.phpied.com/3-ways-to-define-a-javascript-class/
^JS in 2006 before classes
*/
