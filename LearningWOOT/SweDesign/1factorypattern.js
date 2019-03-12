/*
imposter's software design patterns chapter

CREATIONAL PATTERNS:
https://sourcemaking.com/design_patterns/creational_patterns
creational patterns try to create objects suitable to the situation
control over object creation

******Constructor
==> creating instance of class
think javascript functions, java classes

*******Factory Pattern
INTENT: define an interface for creating an object but let subclasses
define which class to instantiate
  class defers instantiation to subclasses

see frequently in java

https://jobs.zalando.com/tech/blog/the-factory-pattern-in-react/?gh_src=4n3gxh1
Application to React
    ex. you have slides but some display brand names and others display
    products
    The Slider stays the same but the slide type differs and differs in the
    data shown on page
    a property is added to the data so that you pass the data
    to the correct type of slide 
    ex. case 'brand':
            return <BrandFeedSlide slideData={data}/>;
    The factory holds the cases

*/
//A factory function returns objects
//
class SharkeyFamilyFactory {
  constructor(type) {
    switch (type) {
      case "younger sister":
        return new YoungerSister();
      case "older sister":
        return new OlderSister();
      case "younger brother":
        return new YoungerBrother();
      case "mom":
        return new Mom();
      case "dad":
        return new Dad();
    }
  }

  getType() {
    return "This family member is the " + this.type;
  }
}

class YoungerSister extends SharkeyFamilyFactory {
  constructor() {
    super();
    this.type = "younger sister";
  }
}

class OlderSister {
  constructor() {
    this.type = "older sister";
  }
}

class YoungerBrother {
  constructor() {
    this.type = "younger brother";
  }
}

class Mom extends SharkeyFamilyFactory {
  constructor() {
    super();
    this.type = "mom";
  }

  catchPhrase() {
    return "Your get up and go got up and went";
  }

  getType() {
    return super.getType() + " additional text for mom woot";
  }
}

class Dad {
  constructor() {
    this.type = "dad";
  }
}

var Elizabeth = new SharkeyFamilyFactory("younger sister");
var Momma = new SharkeyFamilyFactory("mom");
console.log(Momma.catchPhrase());
console.log(Momma.getType());
/*




https://medium.com/beginners-guide-to-mobile-web-development/javascript-design-patterns-25f0faaaa15

https://reactpatterns.com/

https://medium.freecodecamp.org/how-to-build-reliable-objects-with-factory-functions-in-javascript-9ec1c089ea6f


*/
