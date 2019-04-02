/*
don't stick to GUI

http://www.informit.com/blogs/blog.aspx?uk=The-10-Most-Important-Linux-Commands
review of basic shell commands ^

shell -- generalized way to give commands to computer and get output
visual shell is the GUI, visual editor

work with a text based shell like bash, powershell, Z shell (zsh), more using a command line
interfae CLI

rc files are shell scripts that are executed by a program when it starts
text files that let you change how a program behaves

https://www.howtogeek.com/67469/the-beginners-guide-to-shell-scripting-the-basics/
shell scripting:
    lets us program commands in chains, but also run programs on their own
    good for repetitive tasks


ls * * / * .jpg  * * / *.png > images.txt
    this says list out all the files with this ending and then output it to images.txt

> operator
    standard input to the shell is the keyboard
    the standard output is the terminal

    can refer to output with STDOUT
    can refer to standard input as STDIN

when you're working in a shell you're working in a REPL
    read eval print loop
    way to work directly with a language ex. in terminal type node and you will enter
    node REPL


Example from imposters

create resizer.sh file doing touch resizer.sh in correct folder
open that in vs code using code resizer.sh
to insert text into the resizer.sh do code resizer.sh -i for insert
    what happens is you'll go from typing in the command line to typing in the file
    hit escape in the terminal to get out of file
    returns to normal mode ==> look at bottom of file

#!/bin/sh is line 1 (what we entered when we did -i) and this is called a shebang
    shebang tells the shell what interpreter to use to run the script in the form
    of an absolute path
    here, the interpreter is the shell itself and we use the sh program to read
    in commands from the keyboard, a file, or STDIN


to run script in terminal 
    can do sh resizer.sh but this isn't properly invoking the shell script
    we did not directly invoke -- it's like using eval to run a string of code
    rather than directly executing it

    to directly execute do ./resizer.sh
    but this causes problems ==> you can't execute a file directly in the shell
    unless you say it's ok to do this (security feature)

in the file resize.sh in VS:
    o ==> creates a new line and enters insert mode
    esc returns to normal mode, gets out of insert mode
    :w saves the file meaning write this buffer to disk

variables written as (for example) IMAGES=
$(stuff) is a subshell ==> invokes command in place and uses the results directly
in the example we do IMAGES = $(ls .png and .jpg files) to get the list and hold
    it in place in the IMAGES variable

echo outputs value of IMAGES to the screen
    in terminal if we do THING=1
    echo THING returns THING
    echo $THING returns 1 ==> using $ is like expanding a subshell


in normal mode
    can move around using h j k l
    delete a line by going on top of that line and entering dd
    enter i to get back into insert mode

can use for statements
if statements

    remember: to access contents of variable use $VAR
    echo prints to console

run file in terminal after doing :w to save and control Z to suspend

QUOTING
    when we're using the command line, Bash or zsh takes everything typed in
    literally
    to unconfuse the shell we quote

    single quote '' is strong quoting ==> nothing in the string will have
    any meaning to Bash

    double quote "" is weak quoting ==> lets us access variables using $
        would let us set the $DIST directory to be something like
        $HOME/fixed ==> less rigid

    good practice to use quotes when referencing variables




Before we have an IMAGE variable and in that grabbed all of the files in
the screenshots folder using $(ls ./images/screenshots/*.jpg)
    We then looped over that in a for loop saying
    for IMG in $IMAGES
    do
        stuff
    done

    Issue is that we want to use this on an image file not just the hard
    coded screenshots file

    first turn it into a function
    then in IMAGES change screenshots to $1 ==> $1 is a parameter
    now we have $(ls ./images/$1/*.jpg)
    at the bottom call the function with resize_jpegs screenshots


EXECUTION VS. LOADING
==> when we do resize_jpegs screenshots the script will execute everytime
we run it
==> what if we want to load it from anywhere?

source resizer.sh
ref example


MAKE
==> build file that works with a file called a Makefile and basic shell
scripts

make is a build tool not a compiler
The make utility requires a file, Makefile (or makefile ), which defines set of 
tasks to be executed. You may have used make to compile a program from source code.
Most open source projects use make to compile a final executable binary, which can 
then be installed using make install

all build commands go into the makefile

skeleton ==>
all:

clean:

install:

these are called targets the things that make will try to build for you

Makefile has the following directives:
all: builds everything
clean: cleans up all the existing build artifacts, usually deleting the files built

normal to have the following directives:
install: installs whatever built files are generated
.PHONY: lists out the directives that don't create a file

In this example we aren't installing anything so we'll use
all:
clean:
.PHONY: all clean ==> tells Make which of the targets don't create a file, "phony" targets

WHAT IS A TARGET
Make builds output from input files
    Object files compiled into binary code

    Sometimes you want a build step that transforms input but doesn't create a file
    Tell Make that this is a phony target ==> increase performance


indents in a makefile must use tabs not spaces
run make in terminal
    will run and print out the makefile ==> really cool
Note: make outputs each command as it's executed
    silence output using @ at the beginning of each line

note when we just run make it will run the all
if we say make clean it will run make clean which we have set to remove the directory
we just created

from makefile:
all:
    dist app.js
    
    dist and app.js are targets ==> they are later defined 
    targets are the labels
    the stuff after the target are the instructions

all itself is a target
    but it has prerequisites before it can be built
    prerequisites are targets that must be built before creating the current target
    for all to work, dist and app.js have to work

Makefile is a set of rules for building your software

Use variables ==> written like 
    JS_FILES=src/app.js
    referenced as $(JS_FILES)

    $() syntax is a command replacement subshell
        runs all the commands in the subshell outside of its own process

    $@ syntax means look at the variable name with the same name as this target

https://www.howtogeek.com/278599/how-to-combine-text-files-using-the-cat-command-in-linux/
>>

Can have variable names as targets



USING MAKE TO BUILD WEB APPS
every language has own toolset ==> Microsoft has MSBUILD
    Java has ANT, Maven, and Gradle
    Javascript: Grunt, Gulp, Jake

why not a make file?
    prefer to make in own language

Usecase for make file: building web project


code -n file ==> open new vs window from terminal lit

| is the pipe operator
    redirects STDOUT and STDIN for two different functions
    redirects the output of one command to the input of the next command

| is for functions
> is for outputting to a file



CRON



*/