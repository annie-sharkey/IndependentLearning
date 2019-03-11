/*
SWE DESIGN PATTERNS


*****influence of objects*******
huge when java was released in 90s

Before:
    computer programs used to be a set of instructions executed line by line
    could organize code into modules and link things with GOTO statements

Then: 
    changes with object oriented programming (OOP)
    more complex programs needed new architecture


https://medium.com/@jacobfriedman/object-oriented-programming-is-an-expensive-disaster-which-must-end-2cbf3ea4f89d
Opposition to OOP:

argument:
    1) OOP has no unique strengths
    2) OOP have a heavy burden of unneeded complexity

good features not unique to OOP ex. data hiding, contract enforcement,
polymorphism, encapsulation

features unique to OOP are bad ex. dependency injection, instantiation

(random: https://medium.freecodecamp.org/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f
    when class A uses some functionality of class B then class A has a dependency
    of class B
    ex. think Java ==> to use methods of other classes we need to create the object
    of that class meaning class A needs to create an instance of class B
        class Car {
            private Wheels wheel = new MRFWheels
            prviate Battery battery = new Battery  etc
            
        }
        car class creates all the dependency objects
        what if we want to change the type of the wheels?
            may have to create a new car object with a new Yokohama wheel
            dependency
            but with dependency injection we can change the Wheel type at
            runtime (dependencies injected at runtime instead of compile
                time)
            DI does the work of changing/creating the preferred wheels
            and giving it to the car class
            Car class is independent from creating the wheel and battery objects

        three types of DI:
                constructor injection
                setter injection
                interface injection

    challenges: compile time errors pushed to run time, DI frameworks
    are implemented with dynamic programming 
        Spring framework implements dependency injection 
    
    )

Features of OOP: accessors, mutators, encapsulation, abstraction, inheritance
objects, polymorphism

********imposters
Alan Kay's original vision: separate computers sending requests to other
computers that had to be accepted/understood by the receivers before anything happened
    so today every object would be a server offering services whose deployment
    depends on the server's notion of relationship with the servee

describes the Actor Model which is a functional language

(actor model: https://www.brianstorti.com/the-actor-model/
    alternative to using threads
    deals with concurrent computation 
    Actors ==> the thing that receives a message and does computation on it
        like what we have in OOP: an object receives a message (method call) and
        does something based on what is received (what method we're calling)
        
    Difference between actors and OOP:
        actors are isolated from each other and they don't share memory
        actor maintains a private state that can't be changed by another
        actor

    Actors come in systems -- everything is an actor and they need addresses
    so an actor can send a message to another actor

    Actors have mailboxes -- mult actors can run at same time, but an actor
    will process a message sequentially
        if you send 3 messages to the same actor they execute one at a time
        if you wanted to run these concurrently, you would have to create 3 
        actors and send one message to each

        Actors communicate with each other by sending asynchronous messages
        and these messages are stored in other actors' mailboxes until
        they're processed

    What can an actor do when it receives a message
        1. create more actors
        2. send messages to other actors
        3. designate what to do with the next actor

        3 ==> defines how this state looks for the next message it receives (this
            is how actors mutate state, remem that actors maintain private states)
            ex. calculator actor
                initial state is 0
                when it receive add(1) it does not mutate its original state
                it designates that for the next message, the state will be 1

    Fault tolerance -- let it crash philosophy
            don't need to program defensively because it's impossible to anticipate
            ALL problems 
            
            ex. Erlang ==>
            every code runs inside a process (aka actors)
            process is isolated (state doesn't influence other processes)
            a supervisor is another process that is notified when the supervised
                process crashes and then does something about it
            tries to put back in consistent state
            ex. restart actor with intial state

            question: if actors aren't mutated could you just revert back to most
            recent actor state

    Distribution -- doesn't matter if actor to which i'm sending a message is
    running locally or in another node (other data points on network ex. phone,
        personal computer, etc.)

        why care about which machine we're running on so long as the message
        gets there -- importance: we can make systems that leverage
        multiple computers and recover if we fail
    
    )

https://doc.akka.io/docs/akka/2.5.3/scala/guide/actors-intro.html
What problems does the actor model solve?
        overcomes limitations of OOP and meets unique challenges of highly
        distributed systems

Illusion of encapsulation
        ==> internal data of object not directly accessible, only modified
        using curated methods
        the object exposes safe operations that protect the invariant nature
        of the encapsulated data
        ex. when we access data on a binary search tree we expect the ordering
        to be intact when we call

    problem when we have multiple threads accessing same object -- how do we 
    ensure that data remains intact
        Locks
        Problems: locks limit concurrency, costly when operating system
        has to suspend thread and restore it later
            threads can't do meaningful work while suspended
            then have another problem: deadlocks

    issue with multiple machines involved -- threading best with local locks

We ideally envision OOP as a network of object instances that react to method
calls, modify internal state, and then communicate via other method calls

But: in multi threaded distributed environment threads are what actually 
drive execution

Illusion fo shared memory on modern computer architectures
        CPU cores pass chunks of data (cache lines) explicitly to each other
        as computers on a network do
        Reread this section

Illusion of a call stack
        call stacks invented in era where concurrent programming less important
        Call stacks don't cross threads and therefore don't model 
        asynchronous call chains

        Visual is great

        Problem when one thread delegates a task to the background really meaning
        that the task is given to another thread, worker thread

        Main thread moves on and does other things, worker thread picks up
        delegated task in an event loop

        issue when an exception is thrown: goes to the exception handler of 
        worker thread and ignores who the caller/main thread was

        The main/caller thread needs to be notified but we don't have a call stack
        to refer to/unwind

        Summary of issue:
        to achieve concurrency threads need to delegate tasks without blocking
        But call stack based error handling cannot handle this
        Tasks/messages might be lost in restarts

How does Actor model meet needs of concurrent distributed systems
        Features we do like/desire:
            enforce encapsulation without locks
            use model of cooperative entities reacting to signals, changing state,
            and sending signals to each other to drive app forward

(reminder of blocking:
    process is an instance of a computer program being executed
    a process always exists in one process state
    a process that is blocked is one that is waiting for an event so it can be
    completed

    in a multitasking system or threads of execution 
    )
Useage of message passing avoids locking and blocking
        reminder: blocking 

*/
