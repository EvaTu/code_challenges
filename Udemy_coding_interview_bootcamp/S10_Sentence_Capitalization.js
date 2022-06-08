//Coding Interview Bootcamp
//Write a function that accepts a string. The function should capitalize the 1st
//letter of each word in the string then return the capitalized string.

//Examples:
//capitalize("a short sentence") --> "A Short sentence"
//capitalize("a lazy fox") --> "A Lazy Fox"
//capitalize("look, it is working!") --> "Look, It Is Working!"

function capitalize(str){
    let strArr = str.split(" ")
    let newStr = ""
    for(let i = 0; i < strArr.length; i++){
        newStr += strArr[i][0].toUpperCase()+strArr[i].slice(1)+" "
    }

    return newStr.trimEnd()
}

//capitalize("a short sentence")
//capitalize("a lazy fox")
//capitalize("look, it is working!")


function capitalize2(str){
    let newStr = str[0].toUpperCase()
    
    for(let i = 1; i < str.length; i++){
        if(str[i-1] === " "){
            newStr += str[i].toUpperCase()
        }else{
            newStr += str[i]
        }
        
    }

    return newStr
}


//capitalize2("a short sentence")
//capitalize2("look, it is working!")