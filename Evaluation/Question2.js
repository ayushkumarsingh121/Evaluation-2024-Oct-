function reverseWords(str){
  let result = "";
  let Words = str.split(" ");

  for(let word of Words){
    result  += word.split("").reverse().join("") + " "
  }
  return result.trim();
}

const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"

 