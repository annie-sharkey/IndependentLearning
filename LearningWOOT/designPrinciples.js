/*
*******Design Principles (short chapter)*********


Cohesion: how related are the functions of each module/class?
    ex. put Membership code into Membership module 
    put User code into User module 
    This functionality is cohesive aka the ideas bond together logically

Coupling: opposite of cohesion, coupling two or more things means separate
notions become one
    ex. Membership can create a new User

        Goal: high cohesion, low coupling
        classes and modules should make sense for isolating ideas, not rely on
        each other to exist


Separation of concerns:
    slice up aspects of application so they don't overlap
    think of horizontal concerns like user interface, database, and business logic
        can be applied to authentication, logging, and cryptography

    vertical concerns might deal with content management, reporting, membership

YAGNI and DRY
YAGNI: You ain't gonna need it
DRY: Don't repeat yourself


Tell, don't ask
    for example if you want to see if a connection is valid and available and then 
    want it executed, don't make the programmer call commandIsValid and connectionIsAvailable
    before calling Execute

    this involves a lot of knowledge of how the class was created -- defeats purpose of
    encapsulation

    instead pass command to execute, have that method call the other methods inside the class
    and then execute if conditions met otherwise throw an exception


Law of demeter aka principle of least knowledge
    shouldn't have to reach through one object to get to another
    think low amount of "dot counting"


Dependency injection
    https://medium.com/@fleeboy/dependency-injection-in-javascript-9db9ea6e4288
    How does a component (object or function) get a hold of its dependencies?
        1. new operator
        2. look up the dependency from global variable
        3. have the dependency passed to it

        1 and 2 hard code what the component is looking for
        Hard to modify dependencies
        Problem in tests when you want to provide mock dependencies

        ex. public class MyClass {
                private final static ILogger logger;

                public MyClass (ILogger logger) {
                    this.logger = logger; <== this is passed into here instead of being constructed
                    in myclass
                }

        }

        DI less helpful in dynamimc languages like JS ==> better to use higher order functions,
        currying
        Don't necessarily need if you break your components into small parts 

        Benefit of DI is that you have decoupled and can actually test what you want to test

    FROM IMPOSTER'S:
    public class Membership {
        DB _db;

        public Membership() {
            _db = new DB();
        }

        etc
    }
    what is the issue? high coupling ==> db instantiated in membership class

    instead: inject dependnecy through the constructor rather than invoke it in place
    public class Membership {
        DB _db;

        public Membership(DB db) {
            _db = db;
        }
    }
    what issue remains? still coupling because Membership class won't work unless DB instance
    passed to in

    Dependency is an object that is used (a service)
    An injection is the passing of a dependency to the dependent object (a client) that uses it

   ******Consider interface based programming*******
   Remember Java
   Interfacing with an ability rather than a type
   Interface defines functionality of dependency

   Problem: if you have many dependencies, everytime you want to use that class you have to create
   instances of dependencies on their own and then inject them
    sweeps dependency coupling somewhere else

    Inversion of control ==> create a separate mechanism (a container) which is responsible
    for creating and injecting all dependencies and giving those injected objects to you when
    you need
        ex. might create new Container();
        then do container.Bind<>

        then might do var membership = container.Get<IMembership>().InSingletonScope();

        Container is global to application
        Our interfaces are mapped to concrete implementation
        

*/