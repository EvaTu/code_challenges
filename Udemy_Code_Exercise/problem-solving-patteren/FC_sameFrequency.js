// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given 2 positive integers, 
// find out if the 2 numbers have the same frequency of digits. Your solution MUST 
// have the following complexities: Time: O(N)

// inputs:
// sameFrequency(182, 281) //true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) //false

function sameFrequency(num1, num2){

    num1 = num1.toString()
    num2 = num2.toString()

    num1Obj = {}

    for(let i = 0; i < num1.length; i++){
        if(num1Obj[num1[i]]){
            num1Obj[num1[i]]++
        }else{
            num1Obj[num1[i]] = 1
        }
    }

    for(let j = 0; j < num2.length; j++){
        if(!num1Obj[num2[j]]){
            return false
        }else{
            num1Obj[num2[j]]--
        }
    }
    
    return true
}


// sameFrequency(1832,2182)
// sameFrequency(182,281) true
// sameFrequency(34,14) 