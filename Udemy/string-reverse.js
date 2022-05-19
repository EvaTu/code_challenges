// **Big O Notation Section - Intro to Big O
// **Question 1: 
// "Write a function that accepts a string input and 
// returns a reversed copy"
// >>Solution Hints:
// (1) Convert string to array by using string method split() 
//     [don't forget assigning to a variable] OR
// (1) Convert string to array by using spread operator [...str]
// (2) Using array method reverse() to reverse the stringArray
// (3) In the end, using array method join() to convert array back 
//     to string [don't forget assigning to a variable]

function reverseString(str){
    return str.split("").reverse().join("")
}

function reverseString2(str){
    return [...str].reverse().join("")
}

