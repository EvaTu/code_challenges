//Coding Interview Bootcamp
//Given an integer, return an integer that is the reverse ordering of numbers

// Examples:
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

function reverseInt(num){
    let numStr = ""
    let newNumStr = ""
    let newNum = 0
    if(num < 0){
        num*-1
        numStr = num.toString()
        newNumStr = [...numStr].reverse().join("")
        newNum = parseInt(newNumStr)
        return newNum * -1
    }else{
        numStr = num.toString()
        newNumStr = [...numStr].reverse().join("")
        newNum = parseInt(newNumStr)
        return newNum
    }
    
}

//////////////////////OR SIMPLY////////////////////////////


function reverseInt2(num){
    let numStr = num.toString()
    let newNumStr = [...numStr].reverse().join("")
    let newNum = parseInt(newNumStr)

    if(num < 0){
        return newNum* -1
    }
    return newNum
    
}
// reverseInt(15) 
// reverseInt(981) 
// reverseInt(500)
// reverseInt(-15) 
// reverseInt(-90)

// reverseInt2(15) 
// reverseInt2(981) 
//reverseInt2(500)
// reverseInt2(-15) 
reverseInt2(-90)