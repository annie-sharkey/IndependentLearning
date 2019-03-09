/*
Asymptotic notation testing
1) For the functions, n ^k and c ^ n what is the asymptotic relationship?
k and c are constants
  options:
      1. n^k is O(c^n) 
      2. n^k is omega (c^n) ==> lower bound can't be this one
      3. n^k is theta (c^n)

      N^k (polynomial) grows slower than 2 ^ n (exponential)
      O is upper limit 
      omega is lower limit

    Answer: 1 correct
    can't be two because polynomials always grow slower than exponentials
    theta means tightly bound where n^k would be sandwiched between k1* C^n and k2*C^n
        it would have to be both omega and O which it is not

2) Asymptotic relationship of log_2(n) and log_8(n)
    1. log_2(n) is O(log_8(n))
    2. log_2(n) is Omega log_8(n)
    3. log_2(n) is theta log_8(n)

    smaller bases grow faster because you're asking how many powers to get to = x
    log_2(n) = x is n = 2 ^ x
    log_8(n) = x is n = 8 ^ x

    O is upper limit
    log_2 is higher than log_8

    can't be 1
    2 is true
    can't be 3 since we didn't say yes to 0

    Wrong
    Is all three
    ==> When we are answering these questions we are asking can we multiply this function
    by some k that can keep up with the other
    In all of these cases we can multiply some k that will keep us up
    with log_8(n)

    ==> ex. for theta, we're saying log_2n is tightly bound by theta(log_8(n))
        for large enough n, run time is at least k1*log_8(n) < log_2(n) < k2*log_8(n)

3) relationship between n^3log_2(n) and 3nlog_8(n)?
    1. n^3log is O(3nlog)
    2. n^3log is omega(3nlog)
    3. n^3log is theta(3nlog)

    n^3 grows fastest in the first thing
    3n grows fastest in the second thing
    I'm going to compare those
    n^3 is no faster than 3n ==> O is upper limit
        can't be 1 because n^3 grows faster
    n^3 grows at least as fast as 3n so yes 2
    not 3

    answer: 2 ==> correct

4) same thing for 8^n and 4^n
    1. 8^n is O(4^n)
    2. 8^n is omega(4^n)
    3. 8^n is theta(4^n)

    O meaning upper limit. 8^n <= c * 4^n yes to first one
    yes to second one
    yes to theta where k1*4^n <= 8^n <= k2*4^n

    Answer: just 2
    Rethinking it this answer makes sense
    at a certain point we will be multiplying a number that is larger
    than a constant ==> it will surpass the const so for large number
    no k will be able to 
    So rethinking answer only omega because that is lower bound

5) log_2n ^ log_2(17) vs. log_2(17) ^ log_2(n)

    log_2(n) = x so n ^ constant = 2 ^ x


    log_2(17) ^ log_2(n) = x
    17^(log_2(n)) = 2 ^ x
    
    log_2(polynomial) vs. log_2(exponential)
    so log_2(polynomial) will grow faster than log_2(exponential)

    ==> so omega(log_2(exponential)) is true
    ==> there is no constant K you can mult by for it to be upper

    Answer: all three
    review log properties

http://www.cs.cornell.edu/courses/cs312/2004fa/lectures/lecture16.htm
asymptotic analysis
    asymptotic behavior of a function f(n) like f(n) = c*n or c*n^2 
    refers to growth of f(n) as n gets large

Big o doesn't directly measure the constant c
we write O(n) order n instead of cn for some constant c

c is O(1) for any constant c

O ==> f is O(g(n)) f is order g if g is an upper bound on f meaning
there is a fixed constant c such that
    f(n) <= cg(n)

omega
    f is omega of g if g is a lower bound on f for large n 
    so cg(n) <= f(n)

    if f(n) is Omega g(n) then g(n) is O(f(n))

theta
    f is thetag(n) meaning f is theta of g if g characterizes f for large
    n meaning it can be scaled to be both an upper and a lower bound of f.
    so f is both O(g(n)) and omega(g(n))

    f is thetag(n) if 
    c1g(n) <= f(n) <= c2g(n)

Examples:
==> n + logn is Theta(n) because n < n + logn < 2n
==> 
 */
