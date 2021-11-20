const string = prompt("Enter a string: ");
function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
console.log(countVowel(string));
