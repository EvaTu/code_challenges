// Multiple-Pointer - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target
// average, determine if there is a pair of values in the array where the average of
// the pair equals the target average. There may be more than one pair that matches
// the average target. 
// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// Inputs:
// averagePair([1,2,3], 2.5) //true
// averagePair([1,3,3,5,6,7,10,12,19], 8) //true
// averagePair([-1,0,3,4,5,6], 4.1) //false
// averagePair([], 4) //false

function averagePair(sortedArr, aveNum){
    if(sortedArr.length === 0) return false
    let start = 0
    let end = sortedArr.length - 1
    
    while(start < end){
        let sum = sortedArr[start] + sortedArr[end]
        if(sum / 2 > aveNum){
            end--
        }else if(sum / 2 < aveNum){
            start++
        }else if (sum / 2 === aveNum){
            console.log(sum)
            return true
        }
    }
    return false
}

// averagePair([1,2,3], 2.5)
// averagePair([1,3,3,5,6,7,10,12,19], 8)
// averagePair([-1,0,3,4,5,6], 4.1)
// averagePair([], 4)