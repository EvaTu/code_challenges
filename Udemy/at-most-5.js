
// **Big O Notation Section - Simplifying Big O Expression
// **Question 6:
// "console.log at most of 5 times while input number of n"
// >>Solution Hints:
// (1) Math.min(n)
// (2) O(1)

function printAtMost5(num){
    
    for(let i = 1; i <= Math.min(5, num); i++){
        console.log(i)
    }
}