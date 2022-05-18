// Question Description:
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
// the first element will represent a list of comma-separated numbers sorted in ascending order, 
// the second element will represent a second list of comma-separated numbers (also sorted). 
// Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
// If there is no intersection, return the string false.

//Input & Expected Output:
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13

// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10


// Solution:
function FindIntersection(strArr) { 

    //create str1 and str2 from strArr and make them into array
  
    const array1 = strArr[0].split(", ")
    const array2 = strArr[1].split(", ")
  
    //create an object for storing array1 num and a result array
  
    const arrayObj = {}
    const resultArr = []
  
    //forEach through array1 and create the arrayObj
  
    array1.forEach( num => arrayObj[num] = true)
  
    array2.forEach( num => {
      if(arrayObj[num]){
        resultArr.push(num)
      }
    })
  
    if(resultArr.length > 0){
      return resultArr.join(",");
    }
  
    return false
     
  
  }
     