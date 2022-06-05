//Coding Interview Bootcamp
//Given a string, return a new string with the reversed order of characters
//Examples:
// reverse("apple") === "leppa"
// reverse("hello") === "olleh"
// reverse("Greetings!") === "!sgniteerG"


//solution 1 
//using javascript built-in methods
//(1) .split() to convert string to array
//(2) using .reverse() to array and reverse the order of the array
//(3) last, using .join() to convert array back to string
function reverse(str){
    return [...str].reverse().join("")
}


//reverse("apple")
//reverse("Greetings!")

//solution 2
//create a new empty string variable
//using for loop to go through every characters
//add characters from end to start to new string
function reverse2(str){
    let newStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

// reverse2("Greetings!")

//solution 3
//convert string to array
//using .reduce() to go through every elements and add them back to new string
//return reduce result

function reverse3(str){
    
    return [...str].reduce((reversed, char) => char + reversed, "")
  
}

reverse3("Morning!")