//Write a recursive function called capitalizeWords. Given an array of words, return a new array
//containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizedWords(arr, index = 0){
    let newArr = []
    if(index === arr.length) return []
    let upper = arr[index].toUpperCase()
    newArr.push(upper)
    return newArr.concat(capitalizedWords(arr, index+1))
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']