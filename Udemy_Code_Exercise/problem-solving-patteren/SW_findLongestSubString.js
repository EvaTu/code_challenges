// Sliding Window - findLongestSubString
// Write a function called findLongestSubstring, which accepts a string and returns
// the length of the longest substring with all distinct characters.

// Inputs:
//findLongestSubstring("") //0
//findLongestSubstring("rithmschool") //7
// findLongestSubstring("thisisawesome") //6
// findLongestSubstring("thecatinthehat") //7
// findLongestSubstring("bbbbbb") //1
// findLongestSubstring("longestsubstring") //8
// findLongestSubstring("thisisshowwedoit") //6

function findLongestSubstring(str){
    if(str.length === 0) return 0
    let collection = {}
    let j = 0
    let maxLength = 0
    while(j < str.length){
        collection = {}
        for(let i = 0 + j; i < str.length; i++){
            if(!collection[str[i]]){
                collection[str[i]] = 1
            }else{
                break
            }
        }
        j++
        // console.log(collection)
        if(Object.keys(collection).length > maxLength){
            maxLength = Object.keys(collection).length
        }
        
    }
    return maxLength
}


// findLongestSubstring("rithmschool")
// findLongestSubstring("thisisawesome")
//findLongestSubstring("thecatinthehat")
// findLongestSubstring("bbbbbb")
//findLongestSubstring("longestsubstring")
// findLongestSubstring("thisisshowwedoit")

function findLongestSubstring2(str) {
      let longest = 0;
      let seen = {};
      let start = 0;
     
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
          start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
      }
      return longest;
}

// findLongestSubstring2("rithmschool")