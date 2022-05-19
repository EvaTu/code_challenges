
// **Big O Notation Section - Simplifying Big O Expression
// **Question 5:
// "console.log at least of 5 times while input number of n"
// >>Solution Hints:
// (1) Math.min(n)
// (2) O(N)

function printAtLeast5(num){
    
    for(let i = 1; i <= Math.max(5, num); i++){
        console.log(i)
    }
}