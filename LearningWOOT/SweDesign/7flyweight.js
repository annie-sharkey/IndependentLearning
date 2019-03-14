/*
Structural


https://anasshekhamis.com/2017/11/16/flyweight-design-pattern-in-javascript/

PURPOSE: each object is split into two pieces --> state dependent (extrinsic)
part and state independent (intrinsic part)

Intrinsic shared in flyweight object
Extrinsic state stored by client object and passed to Flyweight when 
operations are invoked

Shared flyweight objects are immutable

Ex. Javascript maintains a list of immutable strings that are shared across
the application

Ex. with browers and images
    When a browser loads a web page, it traverses all images on the page
    Stores images in memory
    For images loaded and in cache, flyweight object is created and 
    the browser references this image and
    then adapts the information on positioning on the page for example so that
    repetitive loading does not occur

Ex. with books
    Intrinsic data might be the title of the book, author, genre, ID
    Extrinsic data is the date the book is purchased, customer, when the book
    is due

    A factory can be used for instantiation 


https://msdn.microsoft.com/en-us/magazine/hh273390.aspx
if book already created/exists then we return that book and use a manager
(defined as a singleton) to update the extrinsic data

if book doesn't exist in library then we create that object and store in mem
*/


