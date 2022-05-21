// **Problem Solving Pattern Section - Frequency Counter Anagram Challenge
// **Question 11:
// "Given 2 strings, write a function to determine if the 2nd string is an
// anagram of the 1st. An anagram is a word, phrase, or name formed by re-
// arranging the letters of another, such as 'cinama', formed 
// from 'iceman'"
// >>Solution1 Hints:[O(NlogN)]
// (1) spread the string into array and .sort() and then .join()
// (2) compare the 2 sorted strings if they are the same
// >>Solution2 Hints:[O(N)]
// (1) create an empty object
// (2) using for loop index to convert str1 and str2 to object
// (3) using another for loop (not nested) to check if obj1 and obj2 key
// and then check obj1 and obj2 value 


function anagrams1(str1, str2){

    if(str1.length !== str2.length){
        return false
    }

    let sortedStr1 = [...str1].sort().join("")
    let sortedStr2 = [...str2].sort().join("")

    if(sortedStr1 !== sortedStr2){
        return false
    }
    return true
}


function anagrams2(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    
    let str1Obj = {}
    let str2Obj = {}

    for(let i = 0; i < str1.length; i++){
        str1Obj[str1[i]] = ++str1Obj[str1[i]] || 1
        str2Obj[str2[i]] = ++str2Obj[str2[i]] || 1
    }

    for(let key in str1Obj){
        if(!(str2Obj[key])){
            return false
        }
        if( str1Obj[key] !== str2Obj[key]){
            return false
        }
    }
    return true
}