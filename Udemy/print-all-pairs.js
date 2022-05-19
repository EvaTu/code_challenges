// **Big O Notation Section - Official Intro to Big O
// **Question 4:
// "Console.log all pair numbers of n [nested for loop]"
// >>Solution Hints:
// (1) O(N^2)


function printAllPairs(num){

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            console.log(i, j)
        }
    }
}