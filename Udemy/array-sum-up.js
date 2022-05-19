// **Big O Notation Section - Space Complexity
// **Question 7:
// "Sum up an array of numbers and then return a number back"
// >>Solution Hints:
// (1) for loop
// (2) O(1) space


function arraySumUp(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }

    return total
}