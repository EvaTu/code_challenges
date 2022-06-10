//write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first
//letter of each string in the array. 

function capitalizeFirst (arr, index = 0) {
    // add whatever parameters you deem necessary - good luck!
    if(index === arr.length) return []
    let upper = arr[index][0].toUpperCase() + arr[index].slice(1)
    arr[index] = upper
    capitalizeFirst(arr, index+1)
    return arr
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']