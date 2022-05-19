// **Big O Notation Section - Timing Our Code
// **Question 2: 
// "Suppose we want to write a function that calculates the sum of all
// numbers from 1 up to (and including) some number n"
// >>>>Solution Hints:
// (1) Using for loop to solve the problem [O(N)] OR
// (2) Using math approach to solve this problem [O(1)]

function sumNumbers(num){
    let total = 0
    for(let i = 1; i <= num; i++){
        total += i
    }
    
    return total
}


function sumNumbers2(num){
       
    return (num + 1)*num/2
}