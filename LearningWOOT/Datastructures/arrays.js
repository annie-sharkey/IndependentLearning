/*

non dynamic arrays must be declared with their size upfront, cannot change it
if you need to access an element in an array, the operation takes O(1) if you 
know the index

Crack coding
*/

//************1.1 *******************
//algorithm to determine if a string has all unique characters. what if you
//what if you can't use additional data structures?

//brute force, initial thinking solution
const uniqueString = string => {
  //improvement: don't forget base case, ask yourself what that is
  if (string.length > 128) {
    return "not unique";
  }
  let uniqueArray = [];
  for (i = 0; i < string.length; i++) {
    if (uniqueArray.includes(string.charAt(i))) {
      return "not unique";
    } else {
      uniqueArray.push(string.charAt(i));
    }
  }
  return "unique";
};
//O(n)
//or could argue that it's constant since for loop never runs
//more than 26 times

//console.log(uniqueString("anie"));

/*
Takeaways:
    There is a difference between ASCII and Unicode strings
    Are two ways to represent characters in binary
    https://stackoverflow.com/questions/19212306/whats-the-difference-between-ascii-and-unicode
    ASCII uses 7 bits to represent a character ==> therefore have a maximum of
    2 ^ 7 combinations meaning 128 characters max  
    ASCII meant for English

    ASCII extended --> using the 8th bit to represent more characters
    reaches 256 characters
    solves problem for the latin alphabet but...

    Unicode needed to allow for even more character representations
    in different languages

Another way to do:
    create an array with 128 spaces
    at the corresponding place mark true/false
    if you have a repeating character, it will already be in that
    array as true so then you return that it isn't unique
*/

//without using a data structure
const uniqueNoStructure = string => {
  for (i = 0; i < string.length; i++) {
    for (j = i + 1; j < string.length; j++) {
      if (string.charCodeAt(i) == string.charCodeAt(j)) {
        return false;
      }
    }
  }
  return true;
}; //time: O(n ^2) space: O(1) because you don't have to keep in mem

//console.log(uniqueNoStructure("abcdefghijklmnopqrstuvwxyz"));

//*************************1.2********************
//check permutation ==> is one string a permutation of the other

//brute force, initial idea
const permutationChecker = (str1, str2) => {
  for (i = 0; i < str1.length; i++) {
    if (str2.search(str1.charAt(i)) == -1) {
      return false;
    }
  }
  return true;
};

//obvi not good because one string can have more letters than other
//remember to check base cases
//also search not good because what if you have duplicates

//https://stackoverflow.com/questions/30912663/sort-a-string-alphabetically-using-a-function
const sortPermChecker = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }

  let sortedStr1 = str1
    .split("")
    .sort()
    .join("");
  let sortedStr2 = str2
    .split("")
    .sort()
    .join("");

  for (let i = 0; i < str1.length; i++) {
    if (sortedStr1.charCodeAt(i) != sortedStr2.charCodeAt(i)) {
      return false;
    }
  }
  return true;
}; //inclined to say O(n) except don't know what's going on with sort function
//how we sort would affect time complexity potentially

//console.log(sortPermChecker("rw;qe", "qewr;"));

const sumPermChecker = (str1, str2) => {
  //assuming that if both are zero then that's not technically a perm
  if (str1.length != str2.length || (str1.length == 0 && str2.length == 0)) {
    return false;
  }

  let sumStr1 = 0;
  let sumStr2 = 0;

  for (i = 0; i < str1.length; i++) {
    sumStr1 += str1.charCodeAt(i);
    sumStr2 += str2.charCodeAt(i);
  }

  if (sumStr1 == sumStr2) {
    return true;
  } else {
    return false;
  }
}; //O(n)

//console.log(sumPermChecker("rkw;qe", "qewr;"));

/*Takeaways
1) Need to consider if white space is included as a character
2) Do capital letters matter/are they unique

Had thought about early termination ==> to do this you could
add the values of first string and subtract vals of second
string and end when negative


*/
