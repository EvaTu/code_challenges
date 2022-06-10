//WRite a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str, num = str.length-1){
    // add whatever parameters you deem necessary - good luck!
    if(num < 0) return ""
  
  return str[num] + reverse(str, num-1)
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'