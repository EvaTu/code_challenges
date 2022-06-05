//Coding Interview Bootcamp
//Given a string, return the character that is most commonly used in the string.

//Examples:
// maxChar("abccccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str){
    let strObj = {}

    for(let i = 0; i < str.length - 1; i++){
        if(!strObj[str[i]]){
            strObj[str[i]] = 1
        }else{
            strObj[str[i]] ++
        }
    }
    console.log(strObj)
    let max = 0
    let maxKey = ""
    for(let key in strObj){
        if(strObj[key] > max){
            max = strObj[key]
            maxKey = key
        }
    }

    return maxKey
}

// maxChar("abccccccccd") 
maxChar("apple 1231111")