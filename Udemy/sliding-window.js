// **Problem Solving Pattern Section - Sliding Window Pattern
// **Question 14:
// "Write a function called maxSubarraySum which accepts an array of 
// integers and a number called n. The function should calculate the 
// maximum sum of n cosecutive elements in the array."
// >>Solution1 Hints:[O(N^2)]
// (1) create a max and a j variables as total and index
// (2) for loop (nested loop), 1 for times of sumup, another for sum up numbers length
// (3) compare max and total and return the maximum sum
// >>Solution1 Hints:[O(N)]
// (1) create 2 variables and use 1st for loop and assign the value as total
// (2) use 2nd for loop to deduct old head and add the new tail
// (3) check total and max using if condition and return maximum sum

function maxSubarraySum(arr, num){
    if(arr.length === 0 || num > arr.length) return null
    let max = 0 // -Infinity
    let j = 0
    while( j < arr.length - num + 1){
     let total = 0
      for(let i = 0; i < num; i++){
          total += arr[i+j]
      }
     j++
     if(total > max){
      max = total
     }
     // console.log(j)
    }
    return max
    
   }
   
   // maxSubarraySum([1,2,5,2,8,1,5],2)
   // maxSubarraySum([1,2,5,2,8,1,5],4)
   // maxSubarraySum([4,2,1,6],1)
   // maxSubarraySum([4,2,1,6,2],4)
   // maxSubarraySum([1,2],4)
   //maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
   
   function maxSubarraySum2(arr, num){
    if ( num > arr.length) return null
    let total = 0
    let max = 0
    for(let i = 0; i < num; i++){
      total += arr[i]
    }
   
    for(let j = 0; j < arr.length - num + 1; j++){
     if(total > max){
      max = total
     }
     total = total - arr[j] + arr[j+num]
     console.log("max:", max, "total", total)
    }
    return max
   }
   
   //maxSubarraySum2([1,2,5,2,8,1,5],2)
   //maxSubarraySum2([1,2,5,2,8,1,5],4)
   // maxSubarraySum2([4,2,1,6],1)
   //maxSubarraySum2([4,2,1,6,2],4)
   //maxSubarraySum2([1,2],4)