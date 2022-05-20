// **Problem Solving Pattern Section - Frequency Counter Pattern
// **Question 10:
// "Write a function called same, which accepts 2 arrays. The function should
// return true if every value in the array has it's corresponding value 
// squared in the 2nd array. The frequency of values must be the same."
// >>Solution1 Hints:[O(NlogN)]
// (1) sort both arrays from smaller to bigger numbers
// (2) using for loop index number to compare both arrays
// (3) if condition to check if arr1 number square is same as arr2 number
// >>Solution2 Hints:[O(N^2)]
// (1) using for loop index of array 1 to check .indexOf()
// (2) if conditional if .indexOf() is -1 return false
// (3) .splice() to shorten array2
// >>Solution3 Hints:[O(N)]
// (1) create an empty object
// (2) using for loop index to convert arr2 to object
// (3) using another for loop (not nested) to check if arr1 index number can be
// found as key in arr2Obj


function sameArr(arr1, arr2){

        if(arr1.length !== arr2.length){
            return false
        }
        let sortedArr1 = arr1.sort((num1, num2) => num1 - num2)
        let sortedArr2 = arr2.sort((num1, num2) => num1 - num2)
    
        
        for(let i = 0; i < sortedArr1.length; i++){
            if(sortedArr1[i]**2 !== sortedArr2[i]){
                return false
            }
        }
    
        return true
    }


function sameArr2(arr1, arr2){
        if (arr1.length !== arr2.length){
            return false
        }
    
        for(let i = 0; i < arr1.length; i++){
            let arr2Index = arr2.indexOf(arr1[i]**2)
            if(arr2Index === -1){
                return false
            }
            arr2.splice(arr2Index, 1)
        }
    
        return true
    }


    
function sameArr3(arr1, arr2){
        if (arr1.length !== arr2.length){
            return false
        }
        let arr2Obj = {}
    
        for(let i = 0; i < arr2.length; i++){
            if(arr2Obj[arr2[i]]){
                arr2Obj[arr2[i]]++
            }else{
                arr2Obj[arr2[i]] = 1
            }
        }
    
        for(let j = 0; j < arr1.length; j++){
            if(arr2Obj[arr1[j]**2] > 0){
                arr2Obj[arr1[j]**2]--
                console.log(arr2Obj)
            }else{
                return false
            }
        }
        return true
    }

