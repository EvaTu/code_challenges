//Frequency Counter/ Multiple Pointers -areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether
// there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR 
// the multiple pointers pattern.

// Examples:
// areThereDuplicates(1,2,3) //false
// areThereDuplicates(1,2,2) //true
// areThereDuplicates("a", "b", "c", "a")

function areThereDuplicates(){
   
    let collection = {}
    // for(let value in arguments){
    //     collection[arguments[value]] = ++collection[arguments[value]] || 1
    // }

    for(let value of arguments){
        collection[value] = ++collection[value] || 1
    }
   
    for(let key in collection){
        if(collection[key] > 1){
            return true
        }
    }
    return false
}


// areThereDuplicates(1,2,3,4)
// areThereDuplicates("a", "b", "c", "a")

function areThereDuplicates2(...args) {
      // Two pointers
    if(typeof args[0] === "number"){
        args.sort((a,b) => a - b)
    }else{
        args.sort()
    }
    let start = 0;
    let next = 1;
    
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
      }
    return false
}


// areThereDuplicates2(1,4,3,2)
//areThereDuplicates2("a", "b", "c", "a")

function areThereDuplicates3() {
   console.log(arguments)
   let set = new Set(arguments)
   return !(set.size === arguments.length)
   
}


// areThereDuplicates3(1,3,3,2)
