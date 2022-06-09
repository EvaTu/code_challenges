// Write a function called productOfArray which takes in an array of numbers and returns
// the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr, count=0){
    if(count === arr.length) return 1
    
    return arr[count]*productOfArray(arr, count+1)
}