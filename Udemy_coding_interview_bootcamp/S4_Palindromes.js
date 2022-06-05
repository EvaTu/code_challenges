//Coding Interview Bootcamp
//Given a string, return true if the string is a palindrome or false if it's not.
//Palindromes are strings that form the same word if it's reversed.
//Do include spaces and punctuation in determing if the string is a Palindromes

//Examples:
//palindrome("abba") === true
//palindrome("abcdefg") === false

function palindrome(str){

    let reversedStr = ""
    for(let i = str.length - 1; i >= 0 ; i--){
        reversedStr+=str[i]
    }

    if(str === reversedStr){
        return true
    }else{
        return false
    }
    
}

// palindrome("abcdefg")

function palindrome2(str){
    return [...str].every((char, index) => {
        return char === str[str.length-1-index]
    })
    
}

// palindrome2("abba") 

function palindrome3(str){
    let start = 0
    let end = str.length - 1
    while(end > start && start !== end){
        if(str[start] !== str[end]){
            return false
        }
        start++
        end--
    }
    
    return true
}
palindrome3("abba") 