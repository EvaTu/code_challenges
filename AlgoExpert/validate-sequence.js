// Question Description:
// Given 2 non-empty arrays of integers, write a function that determines whether the 2nd array is a subsequence of the 1st one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array 
// but are in the same order as they appear in the array.
// For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4].
// Note that a single number in an array and the array itself are both valid subsequence of the array.

//Input & Expected Output:
// "array": [5, 1, 22, 25, 6, -1, 8, 10],
// "sequence": [1, 6, -1, 10]

// "array": [1, 1, 1, 1, 1],
// "sequence": [1, 1, 1]

// "array": [5, 1, 22, 25, 6, -1, 8, 10],
// "sequence": [5, 1, 22, 22, 6, -1, 8, 10]

// "array": [5, 1, 22, 25, 6, -1, 8, 10],
// "sequence": [1, 6, -1, 5]


// Solution:
function isValidSubsequence(array, sequence) {
    // Write your code here.
       for(let i = 0; i < sequence.length; i++){
      for(var j = 0; j < array.length; j++){
        console.log("i:",i, "j:",j)
        if(sequence[i] !== array[j]){
          j++
          if(j === array.length){
            return false
          }
        }
        if(sequence[i] === array[j]){
          console.log("i:",i, "j:",j, "sequence: ",sequence[i],"array:",array[j])
          i++
                  if(i === sequence.length){
            break
          }
        }
      }
      if(j === array.length && i < sequence.length){
            return false
          }
    }
    return true
  }
  