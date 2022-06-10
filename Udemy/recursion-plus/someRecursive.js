//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true 
//if a single value in the array returns true when passed to the callback. Otherwise it returns false.

const threeMulti = num => num%3 === 0 

function someRecursive(arr,callback){
    if(arr.length === 0) return false
    if(callback(arr.splice(0,1))) return true
    return someRecursive(arr,callback)
}


someRecursive([1,2,5,7,9],threeMulti)