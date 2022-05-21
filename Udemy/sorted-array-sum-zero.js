// **Problem Solving Pattern Section - Multiple Pointers Pattern
// **Question 12:
// "Write a function called sumZero which accepts a sorted array of 
// integers. The function should find the 1st pair where the sum is 0.
// Return an array that includes both values that sum to zero or 
// undefined if a pair does not exist"
// >>Solution1 Hints:[O(N^2)]
// (1) using nested for loop, one with i and another is j = i+1
// (2) if conditional statement
// >>Solution1 Hints:[O(N)]
// (1) assign 2 variables from 2 sides of the array
// (2) while j > i and if condition

function sumZero(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1 ; j < arr.length; j++){
            if( arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

// sumZero([-4, -3, -2, -1, 0, 1, 2, 5])
// sumZero([-2, -1, 0, 1, 3])
// sumZero([-4, -2, -1, 0, 1, 3])
// sumZero([-2, 0, 1, 3])
// sumZero([ 1, 2, 3])

function sumZero2(arr){
    let j = arr.length -1
    let i = 0
    while(j > i){
        if(arr[i] + arr[j] < 0){
            i++
        }else if(arr[i] + arr[j] > 0){
            j--
        }else if(arr[i] + arr[j] === 0){
            return([arr[i] , arr[j]])
        }
    }
}

// sumZero2([-2, -1, 0, 1, 3])
// sumZero2([-4, -2, -1, 0, 2, 3])
// sumZero2([-2, 0, 1, 3])
// sumZero2([-4, -3, -2, -1, 0, 1, 5])