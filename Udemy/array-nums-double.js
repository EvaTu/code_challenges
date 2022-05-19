// **Big O Notation Section - Space Complexity
// **Question 8:
// "Double every number in an array and then return a new array back"
// >>Solution Hints:
// (1) for loop
// (2) O(N) space


function arrayNumsDouble(arr){
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        newArr.push( arr[i] * 2)
    }

    return newArr
}