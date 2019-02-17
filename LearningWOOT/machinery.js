/*

MACHINERY

***Markov chain***
https://brilliant.org/wiki/markov-chains/

ex. drunkard's walk ==> walk on a number line where at each step you can either go +1 or -1
with equal probability. 

Transitions depend on the current state, not on any previous states.


Markov Chains are probabilistic finite state machines. 

***Finite State Machine*******
https://www.i-programmer.info/babbages-bag/223-finite-state-machines.html

Think: hammer is the state machine that forces a nail through different transitions.

Two types: deterministic and nondeterministic

Deterministic finite state machine ==> every state has a single transition for every action
until we finally reach acceptance or rejection

        think: you have a nail (starting state), you hit the name with the hammer (partially
            in wood state), you end with acceptance of nail in wood

            want to end in acceptance 

Nondeterministic finite state machine ==> state machine that has one or more transitions for a set of actions and 
transitions are "random"-- transitions from one state to the next as a result of some
random choice but still independent of the prior state
        --> might take same input but have different results

        think: above scenario with the possibility to have a hit end move to a bent nail instead of the
        acceptance state
        --> additionally can add a state on the nail partially in the wood where you must hit again 
        in order to get to the final state of nail in wood

conditional step of hitting nail again is still deterministic
however state of bent nail is nondeterministic

Limitation of Finite State Machines: you cannot store state
            ex. if you want to find out if there are an even number of 1's in a byte sequence,
            you can't also store the number of 0s ==> there is no memory

    need something more complex...

application of finite state machines:
            data structures with pointers ==> storing possible states and pointing to current state

Pushdown machine is more complex version of finite state machine ==> push down stack aka LIFO stack
            add to stack (push)
            remove from stack (pop)

            more powerful because state transitions are determined by three things:
                1) input symbol (1 or 0) 2) current state 3) stack symbol

            pushdown machine is finite in number of states it can handle


*****Turing machine****** ==> fundamental for computation
https://www.i-programmer.info/babbages-bag/223-finite-state-machines.html?start=2
https://www.i-programmer.info/babbages-bag/23-turing-machines.html
https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/turing-machine/one.html
(conceptual machine)

Context free vs. context sensitive
            review these: https://en.wikipedia.org/wiki/Context-sensitive
            https://en.wikipedia.org/wiki/Context-free_grammar

More powerful because it is not limited to LIFO order ==> can read and write in any order

A turning machine can accept a context-sensitive sequence.
Is a finite state machine has "tape" which stores the input symbols. 
The tape is one dimensional. 
It can read or write and move the tape left/right.
Is unlimited, but not infinite ==> difference between being able to replace tape and tape being infinitely
long ==> think "just enough"

A Turning machine can use other, smaller machines to arrive at a calculation-- using functions as arguments (similar
    idea to lambda)

If an algorithm is computable then a Turing machine (/set of functions) can compute it 

Four parts of a Turing Machine:
            1. A set of symbols in a language, usually use 0 or 1
            2. "Tape" that contains a single row of symbols that can be read
            3. A read/write head 
            4. Rules for reading or writing from the tape

As the Turing Machine reads, the "state of mind" of the machine changes based on the information its given.


Turing completeness requires:
            1. Conditional branching
            2. Loops
            3. Variables and memory

****Beginning of On Computable Numbers by Turing******
https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf
A computable number is one whose expressions as a decimal can be written down by a machine/
calcuable by finite means.
==> could also investigate computable functions

1. Computing Machines
Computable numbers are not necessarily all numbers that are definable. 
Think of machine that has a finite number of conditions q1, q1,..., qn ==> called m-configurations
The machine is given "tape" broken into single squares with symbols on them.
Only one square is in the machine at a time, but a machine can "remember" past squares with symbols on them by 
altering its m-configuration.

The behavior of the machine at any moment is determined by the m-configuration qn and the scanned symbol r.
            The pair of qn and r is the configuration and the configuration determines the possible
            behavior of the machine.

On a blank square, the machine might write down a symbol. The machine is also capable of erasing a symbol.
The machine can change the square which it is scanning, but only by shifting it one place to the left or right.

2. Definitions
Automatic machines -- each stage of motion of the machine is determined completely by the configuration.

Computing machines -- consist entirely of 0s and 1s
            Sequence computed by the machine -- subsequence of symbols written on the tape
            Number computed by the machine -- real number whose expression as a binary decimal is obtained
            **Complete configuration -- at any stage of motion of the machine, the number of the scanned square,
            the complete sequences of all symbols on the tape, and the m-configuration describes the complete
            configuration at that stage
            Moves are the changes between configurations
    
Circular and circle free machines -- circular if machine never writes down more than a finite number of
symbols of the first kind (0s and 1s) otherwise circle-free

Computable sequences and numbers -- circle free machine

3. Examples of computing machines
Reference pdf doc


https://web.mit.edu/manoli/turing/www/turing.html
"The model consists of an input output relation that the machine computes. The input is given in binary form on the 
machine's tape, and the output consists of the contents of the tape when the machine halts.

What determines how the contents of the tape change is a finite state machine (or FSM, also called a finite automaton) 
inside the Turing Machine. The FSM is determined by the number of states it has, and the transitions between them.

At every step, the current state and the character read on the tape determine the next state the FSM will be in, 
the character that the machine will output on the tape (possibly the one read, leaving the contents unchanged), 
and which direction the head moves in, left or right.

***The problem with Turing Machines is that a different one must be constructed for every new computation to be performed, 
for every input output relation.

This is why we instroduce the notion of a universal turing machine (UTM), which along with the input on the tape, 
takes in the description of a machine M. The UTM can go on then to simulate M on the rest of the contents of 
the input tape. A universal turing machine can thus simulate any other machine."


****Universal turing machine****
Can read in and simulate another Turing machine, even a copy of itself. 

State transition diagram input to Universal Turing Machine which outputs to tape

https://en.wikipedia.org/wiki/Universal_Turing_machine
Reads the description of the machine to be simulated as well as the input from its tape
"It is possible to invent a single machine which can be used to compute any computable sequence. If this machine U 
is supplied with a tape on the beginning of which is written the S.D ["standard description" of an action 
table] of some computing machine M, then U will compute the same sequence as M." 

This idea that you can store the instructions for the machine in the same memory as the input data influenced
Von Neumann. 

http://www.nhu.edu.tw/~chun/CS-ch01-Introduction.pdf
Think of a simple data processor as Input data ==> computer ==> output data
Then the Universal turing machine says input data ==> computer which has accepted a program ==> output

VN says program and data are logically the same so programs should also be stored in the memory of the 
computer. 
VN has input data ==> Arithmetic logic unit/control unit/memory ==> output data
(VN is different because previously only data was stored in memory-- to change the program you had to
    manipulate switches / change the wiring system)
Now, if both instructions and data are stored in memory, then they should have the same format
==> stored as binary patterns in memory as a sequence of 0s and 1s

In VN, there are a finite number of instructions. The control unit fetches one instruction from memory,
decodes it, then executes it --> instructions are executed one after another. 

Turing is conceptual and doesn't go into implementation, VN did implementation-- stored program in memory

https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/turing-machine/four.html
Turing Machine Example Problems


*****Von Neumann Machine********
Where does the instruction set live in the machine? because before you made a machine that did one thing.
How do we make a machine that can do anything?

Result/Answer: make a machine that includes the instructions as part of the tape ==> what we know as a 
program.
VN has input data ==> Arithmetic logic unit/control unit/memory ==> output data

=========> ENIAC and EDVAC
Earliest machines could do one job/task/had fixed programs ex. desk calculator.
    These machines aren't so much programmed as they were designed to complete a task.
    To "reprogram" or change the task a machine did required rewiring-- took a long time.
the world's first electronic computer designed during WWII to crack german codes
The ENIAC calculated ballistic trajectories and other calculations and was programmable but people have to
phsyically move wires around meaning that the program wwas not stored in memory


IMPROVEMENT: EDVAC
https://en.wikipedia.org/wiki/EDVAC
Stored the program next to the data itself ==> easier to reprogram
Unliked ENIAC, was binary rather than decimal.

Could automatically add, subtract, multiply, divide.

http://www.eingang.org/Lecture/edvac.html
The capabilities to store the program with data was going to be possible because the machine would have
more internal memory. Memory provided by the use of mercury delay lines.
Given a tube of mercury, an electronic pulse could be bounced back and forth to be retrieved at will--
therefore giving you a two state device relying on 0s and 1s. This simplified the construction of the
arithmetic units.

This reading has more info on the physical components of the original computers. 



***************Limitations of Von Neummann Architecture******
https://whatis.techtarget.com/definition/von-Neumann-bottleneck
Bottleneck problem is a limitation on throughput (how many units of info a system can process in a given
    amount of time)
Memory holds the programs and data
Processor responds to and processes the instructions of a computer ==> fetch, decode, execute, writeback

Data moves between memory and processor ==> results in latency.

Problem: processor speeds have increased while memory improvements have mostly been to holding more
memory in less space rather than focusing on transfer rates. 
Faster processors now spend more time idle while it waits for data to be fetched from memory. 
Processor limited by the rate of transfer allowed by the bottleneck. 


SOLUTIONS to overcoming bottleneck (very interesting **return** for more learning):
    - Caching -- storing frequently used data in a special area so it is more accesible
    - Prefetching -- move more data into cache before requested
    - Multithreading -- managing multiple requests simultaneously


*******The Halting Problem Revisited********
Reread notes from computation chapter
Decision problem about properties of computer programs on a fixed Turing-complete model of computation.
Issue is given a problem and an input to the program will the program eventually halt.
(there are no limitations on memory or storage space before halting)
Look at Turing's proof that no algorithm exists that correctly decides whether something will halt
when run with a given input. 


***********Other***********
Turing completeness means that, given enough time and space, a machine can take any program and
run that program and return a result. Programming languages take programs and run them-- it is complete
if it can take any program that a Turing machine can and run it given enough memory and time. 
Java, Javascript, etc. are turing complete

http://www.kerryr.net/pioneers/binary.htm
BINARY
0s and 1s counting system
Binary system uses base two as opposed to decimal base ten ==> so numbers get larger faster

Decimal counting goes: 10 1 so to represent 10 you need 1 ten and 0 1s so (1)(10) + (0)(1) = 10
Binary counting goes: 8 4 2 1 so to represent ten you need to do 1(8) + 0(4) + 1(2) +0(1) so 10
    is represented by 1010. 

Addition of 1 + 1
In decimal: 10     1
                +  1
                   1
                   = 2
In binary: 2     1
                1
                + 1
        = 1     0


**Look into more:

    - Do a project with threading
    - Do a project with caching

    - Additional EDVAC reading: https://www.thocp.net/hardware/edvac.htm

    - Additional reading on delay lines: https://www.computerhistory.org/storageengine/edsac-computer-employs-delay-line-storage/

    - LISP ==> uses Von Neumann 

    - http://ripark.github.io/f16/vonNeumannModel.pdf
    Revisit the tables used for Turing Machines

    -CPUs more in depth/technically, arithmetic logic unit, floating point unit, registers,
    cache memory

    - implement a cache: https://crunchify.com/how-to-create-a-simple-in-memory-cache-in-java-lightweight-cache/

*/
