//Coding Interview Bootcamp
// Write a program that console logs the numbers from 1 to n.
//But for multiples of 3 print "fizz" instead of the number and 
//for the multiples of 5 print "buzz". For numbers which are 
//multiples of both 3 and 5 print "fizzbuzz".

//Examples:
//1
//2
//fizz
//4
//buzz

function fizzBuzz(num){
    for(let i = 1 ; i <= num ; i++){
        if(i%15 === 0){
            console.log("fizzbuzz")
        }else if(i%3 === 0){
            console.log("fizz")
        }else if(i%5 === 0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }
}
// fizzBuzz(15)
