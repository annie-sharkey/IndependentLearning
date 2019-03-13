/*
Structural pattern
behavior can be added to individual object without affecting the
behavior of other objects from the same class
    ex. you have a burrito class
    at chipotle you can put certain toppings on your burrito but not
    all burrito places have these toppings
    put decorators on chipotle version (extension) of burrito but not
    all burrito objects

is an alternative to subclassing
responsibilities added to object at run time

decorate class wraps the original class


https://sourcemaking.com/design_patterns/decorator
want to add behavior/state at run time, inheritance not feasible because
static and applies to an entire class

what do you do?

https://www.codementor.io/faizanhaider/javascript-decorator-pattern-9wr03qb20
decorators are like a wrapper that extend functionality of an object while
maintaining object interface


call() calls a function with a given this value and arguments provided
PURPOSE: function/method belonging to one object can be assigned and called
for a different object
    ==> lets you write a method once and then inherit it without having
    to rewrite method for new object
    ==> ex. chains constructors
*/

function Burrito(company) {
  this.company = company;
  this.cost = 0;
}

Burrito.prototype.company = function() {
  return "Your burrito is from " + this.company;
};

function ChipotleBurrito() {
  Burrito.call(this, "chipotle");
  this.cost = 6;
}

//decorator wrapper
ChipotleBurrito.extraMeat = function(chipObject) {
  chipObject.cost += 2;
};

//decorator
ChipotleBurrito.guac = function(chipObject) {
  chipObject.cost += 1;
};

function CaliforniaBarf() {
  Burrito.call(this, "california barf");
}

//var annieBurrito = new Burrito("annie");
// var annieChip = new ChipotleBurrito();
// console.log(annieChip.cost);
// ChipotleBurrito.extraMeat(annieChip);
// console.log(annieChip.cost);
// ChipotleBurrito.guac(annieChip);
// console.log(annieChip.cost);

//make object
//pass it into functions

class Cake {
  constructor() {
    this.cost = 5;
  }
}

Cake.prototype.icing = function(cakeObj) {
  this.cost += 2;
};

Cake.prototype.butterCream = function(cakeObj) {
  this.cost += 3;
};

var annieCake = new Cake();
