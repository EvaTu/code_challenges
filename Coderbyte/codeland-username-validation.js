// Question Description:
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if 
// the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.


//Input & Expected Output:
// Input: "aa_"
// Output: false

// Input: "u__hello_world123"
// Output: true

// Solution:
function CodelandUsernameValidation(str) { 

    // code goes here  
    if(str.length > 25 || str.length < 4){
        return false
    }
    
    for(let i = 0; i < str.length; i++){
        if(!(/^[a-zA-Z]*$/.test(str[0]))){
            return false
        }
        if(!(/^[a-zA-Z0-9]*$/.test(str[i])) && str[i].charCodeAt() !== 95){
            return false
        }
        if(str[str.length-1].charCodeAt() === 95){
            return false
        }
    }
        return true
  
  }