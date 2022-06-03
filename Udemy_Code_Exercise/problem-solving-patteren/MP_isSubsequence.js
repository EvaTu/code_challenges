// Multiple Pointer - isSubsequence

// Write a function called isSubsequence which takes in 2 strings and checks whether the 
// characters in the 1st string form a subsequence of the character in the 2nd string. 
// In other words, the function should check whether the characters in the 1st string apprear
// somewhere in the 2nd string, without their order changing.

// Examples:
// isSubsequence("hello", "hello world")
// isSubsequence("sing", "sting")
// isSubsequence("abc", "abracadabra")

function isSubsequence(str1, str2){
    let i = 0
    let j = 0
    if(!str1) return false

    while(j < str2.length){
        if( str2[j] === str1[i]) i++
        if( i === str1.length) return true
        j++
    }
    return false
}

//isSubsequence("hello", "world hello")
// isSubsequence("sing", "sting")

function isSubsequence2(str1, str2){
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str1[0] === str2[0]) return isSubsequence2(str1.slice(1), str2.slice(1))

    return isSubsequence2(str1, str2.slice(1))
}

// isSubsequence2("siing", "sting")