// **Problem Solving Pattern Section - Divide and Conquer Pattern
// **Question 15:
// "Given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value passed to 
// the function is located. If the value is not found, return -1."
// >>Solution1 Hints:[O(N)]
// (1) for loop
// (2) if condition, after for loop return -1
// >>Solution1 Hints:[O(logN)]
// (1) create 3 variables start, end, mid
// (2) while loop and if condition to change start, end or mid 
// index number
// (3) after while is done return -1


function search(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===value){
            return i
        }  
    }
    return -1
}

//search([1,3,6,7,9,15], 15)
// search([1,3,6,7,9,15], 9)
// search([1,3,6,7,9,15], 11)

function search2(arr, value){
    let mid = Math.floor((arr.length - 1)/2)
    let start = 0
    let end = arr.length - 1
    while(start <= end){
        if(arr[mid]===value){
            return mid
        }else if(arr[mid] > value){
            end = mid - 1
            mid = Math.floor((start+end)/2)
        } else if(arr[mid] < value){
            start = mid + 1
            mid = Math.floor((start+end)/2)
        }
    } 
   
    
    return -1
}


// search2([1,3,6,7,9,15], 15)
//search2([1,3,6,7,9,15], 1)
//search2([1,3,6,7,9,15], 4)
//search([1,3,6,7,9,15], 7)
