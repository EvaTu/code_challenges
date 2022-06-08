//Coding Interview Bootcamp
//Check to see if 2 provided string are anagrams of each other.
//1 string is an anagram of another if it uses the same characters in the
//same quantity. Only consider characters, not spaces or punctuation. 
//Consider capital letters to be the same as lower case.


//Examples:
// anagrams('rail safety', 'fairy tales') --> true
// anagrams('RAIL! safety', 'fairy tales') --> true
// anagrams('Hi there', 'Bye there') --> true

function anagrams(str1, str2){
    str1 = str1.replace(/[^\w]/g,"").toLowerCase()
    str2 = str2.replace(/[^\w]/g,"").toLowerCase()
    if(str1.length !== str2.length) return false
    let str1Obj = {}
    for(let i = 0 ; i < str1.length; i++){
        if(!str1Obj[str1[i]]){
            str1Obj[str1[i]] = 1
        }else if(str1Obj[str1[i]]){
            str1Obj[str1[i]] ++
        }
    }

    for(let letter of str2){
       if(!str1Obj[letter]){
           return false
       }else{
           str1Obj[letter]--
       }
    }

    return true
}

//anagrams('rail safety', 'fairy tales')
//anagrams('RAIL! safety', 'fairy tales')
//anagrams("helll","hello")

function anagrams2(str1, str2){
    str1 = str1.replace(/[^\w]/g, "").toLowerCase()
    str2 = str2.replace(/[^\w]/g, "").toLowerCase()

    let sortedStr1 = [...str1].sort().join("")
    let sortedStr2 = [...str2].sort().join("")

    if(sortedStr1 === sortedStr2){
        return true
    }else{
        return false
    }
}

//anagrams2("hello","hello")
//anagrams2('rail safety', 'fairy tales')
//anagrams2('RAIL! safety', 'fairy tales')
//anagrams2("iceman", "cinema")
//anagrams2("texttwist", "texttwist")