//Coding Interview Bootcamp
//Given an array and chunk size, divide the array into many subarrays
//where each subarray is of length size

//Examples:
// chunkArr([1,2,3,4],2) --> [[1,2], [3,4]]
// chunkArr([1,2,3,4,5],2) --> [[1,2], [3,4], [5]]
// chunkArr([1,2,3,4,5,6,7,8], 3) --> [[1,2,3],[4,5,6],[7,8]]
// chunkArr([1,2,3,4,5],4) --> [[1,2,3,4],[5]]
// chunkArr([1,2,3,4,5],10) --> [[1,2,3,4,5]]

function chunkArr(arr, num){
    let newArr = []
    while(arr.length > 0){
        newArr.push(arr.splice(0,num))
    }
    return newArr
}


// chunkArr([1,2,3,4],2)
// chunkArr([1,2,3,4,5],10)
// chunkArr([1,2,3,4,5],4)
// chunkArr([1,2,3,4,5,6,7,8], 3)
// chunkArr([1,2,3,4,5],2)


function chunkArr2(arr, num){
    let newArr = []
    let start = 0
    let point = 0
    while (point < arr.length){
        point += num
        newArr.push(arr.slice(start, point))
        start += num
    }
    return newArr
}

// chunkArr2([1,2,3,4,5],2)
// chunkArr2([1,2,3,4,5,6,7,8], 3)
// chunkArr2([1,2,3,4,5],4)
// chunkArr2([1,2,3,4,5],10)
// chunkArr([1,2,3,4],2)


function chunkArr3(arr, num){
    let newArr = []
    
    for(let i = 0 ; i < arr.length; i++){
        let nestedArr = newArr[newArr.length - 1]
        if(!nestedArr || nestedArr.length === num){
            newArr.push([arr[i]])
        }else{
            nestedArr.push(arr[i])
        }
    }
    return newArr
}

//chunkArr3([1,2,3,4,5],2)
//chunkArr3([1,2,3,4,5,6,7,8], 3)
//chunkArr3([1,2,3,4,5],4)
//chunkArr3([1,2,3,4,5],10)
//chunkArr3([1,2,3,4],2)