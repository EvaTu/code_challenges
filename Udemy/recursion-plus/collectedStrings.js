//Write a function called collectStrings which accepts an object and returns an array of 
//all the values in the object that have a typeof string

const obj2 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj){
    let strArr = []

    function helper(obj){
        for(let key in obj){
            if( typeof obj[key] === "string"){
                strArr.push(obj[key])
            }else{
                return helper(obj[key])
            }
        }
    }
    helper(obj2)
    return strArr
}


function collectStrings(obj){
    let strArr = []
    for(let key in obj){
        if( typeof obj[key] === "string"){
            strArr.push(obj[key])
        }else{
            strArr = strArr.concat(collectStrings(obj[key]))
        }
    }   
    return strArr
}