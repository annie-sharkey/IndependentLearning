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


*****Turing machine******
(conceptual machine)


*/