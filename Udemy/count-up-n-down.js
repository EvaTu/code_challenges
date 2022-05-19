// **Big O Notation Section - Official Intro to Big O
// **Question 3:
// "Countup and console.log from 1 to number n and then 
// Countdown and console.log from n to number 1 "
// >>Solution Hints:
// (1) O(N)

function countUpAndDown(num){
    console.log("start counting up...");

    for(let i = 1; i <= num; i++){
        console.log(i)
    }

    console.log("at top, start counting down...");

    for(let j = num -1 ; j >= 1; j--){
        console.log(j)
    }

    console.log("back to start");
}