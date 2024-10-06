function countVowelsAndConsonants(str){
  let vowels = "aeiouAEIOU"
  let result = {
    vowels: 0, consonant : 0
  };
  for(let char of str.toLowerCase()){
    if(/[a-z]/.test(char)){
      vowels.includes(char) ? result.vowels++ : result.consonant++;
    }
  }
  return result
}

function reverseWords(str){
  return str.split("").reverse().join(" ")
}

const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }