function isPalindrome(str){
  let cleanStr = str.toLowerCase().replace(/[^a-z]/g, "");
  return cleanStr === [...cleanStr].reverse().join();
}

const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true

