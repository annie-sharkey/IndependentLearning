/*
Structural patterns ==> we use methods, modules, and classes to create
structure
complex code needs structure to reduce confusion/complexity

******ADAPTER pattern**********
https://davidtang.io/2015/10/16/the-adapter-pattern-in-javascript.html
Use case: data fetching and persistence

ex. if you have a class and you create an interface for different
backends like postgressql and another for sql

Reference example in link

main idea is separating logic for data persistance out of logic
for the class
    let adapter handle data persistence

******Bridge pattern***********
https://anasshekhamis.com/2017/11/02/bridge-design-pattern-in-javascript/
aka double adapter pattern
Allows two components to work together with each component having own interface

ex. you have shapes that can each be colors
*/

class Red {
  colorName() {
    return "red";
  }
}

class Green {
  colorName() {
    return "green";
  }
}

class Blue {
  colorName() {
    return "blue";
  }
}

class Circle {
  constructor(color) {
    this.color = color;
  }
  toString() {
    return this.color.colorName() + " Circle";
  }
}

var blueCircle = new Circle("blue");
console.log(blueCircle);

/*
***********Facade Pattern************
structural

https://anasshekhamis.com/2017/09/21/facade-design-pattern-in-javascript/
Example
  TravelFacade makes it possible to book (create new object) a
    hotel, flight, or train




*/
