// **Problem Solving Approach Section - Step 2 Concrete Examples
// **Question 9:
// "Write a function which takes in a string and returns counts of each
// character in the string"
// >>Solution Hints:
// (1) create an empty object
// (2) for loop the string and using if conditional statement
// (3) don't forget upper or lowercase and alphanumerical

function countStrChar(str){
        str = str.toLowerCase()
        let charObj = {}
        for(let i = 0; i < str.length; i++){
          if(/^[A-Za-z0-9]+$/.test(str[i])){
            if(charObj[str[i]]){
                charObj[str[i]]++
            }else{
                charObj[str[i]] = 1
            }
          }
        }
        return charObj
    }

function countStrChar(str){
        str = str.toLowerCase()
        let charObj = {}
        for(let i = 0; i < str.length; i++){
          if(/^[A-Za-z0-9]+$/.test(str[i])){
              charObj[str[i]] = ++charObj[str[i]] || 1
          }
        }
        return charObj
    }