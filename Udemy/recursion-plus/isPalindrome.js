//Write a recursive function called isPalindrome which returns true if the string passed to it is 
//a palindrome (reads the same forwards and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str, start = 0, end = str.length - 1){
    // add whatever parameters you deem necessary - good luck!
    if(start === end) return true
    if( str[start] !== str[end]){
          return false
      }
     return isPalindrome(str, start+1, end-1)
  }