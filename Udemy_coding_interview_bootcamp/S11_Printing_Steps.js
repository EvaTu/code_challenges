//Coding Interview Bootcamp
//Write a function that accepts a positive number N.
//The function should console log a step shape with N levels using the # character. 
//Make sure the step has spaces on the right hand side.

function steps(num){

    for(let i = 0; i < num; i++){
        let str = ""
        for(let j = 0; j < num; j++){
            if(j <= i){
                str += "#"
            }else{
                str += " "
            }
        }
        console.log(str)
    }
}


//steps(2)


function steps2(num, row = 0, str= ""){
    if(num === row) return

    if(str.length === num){
        console.log(str)
        steps2(num, row+1)
        return
    }

    str.length <= row? str+="#" : str+=" "
    
    // if(str.length <= row){
    //     str+="#"
    // }else{
    //     str+=" "
    // }
    steps2(num, row, str)
}


steps2(4)