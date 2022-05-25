// **Problem Solving Pattern Section - Multiple Pointers: Count Unique
// Values Challenge
// **Question 13:
// "Implement a function called countUniqueValues, which accepts a 
// sorted array, and counts the unique values in the array. There can
// be negative numbers in the array, but it will always be sorted"
// >>Solution1 Hints:[O(N)]
// (1) create an object
// (2) for loop 
// (3) Object.keys and check the length
// >>Solution1 Hints:[O(N)]
// (1) create 2 variables and use them as array index
// (2) for loop to move and swap/change index position by if condition 
// (3) check the end index num

function countUniqueValues(arr){

    let arrObj = {}

    for(let i = 0; i < arr.length; i++){
        if(arrObj[arr[i]]){
            arrObj[arr[i]]++
        }else{
            arrObj[arr[i]] = 1
        }
    }

    let keyLength = Object.keys(arrObj).length
    return keyLength
}


// countUniqueValues([1,1,1,1,1,2])
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
// countUniqueValues([])
// countUniqueValues([-2,-1,-1,0,1])

function countUniqueValues2(arr){
 if(arr.length === 0) return 0
 let j = 0
 for(let i = 1; i < arr.length; i++){
   if(arr[i] !== arr[j]){
     j++
     //arr[j] = arr[i]
     [arr[j], arr[i]] = [arr[i], arr[j]]
   }
 }
 console.log(arr)
 return j + 1
   
}
                //    j         i
// countUniqueValues2([1,1,1,1,1,2,3])
// countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])
//countUniqueValues2([])
//countUniqueValues2([-2,-1,-1,0,1])