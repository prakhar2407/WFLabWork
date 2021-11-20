var str = prompt("Enter String");
function possibleCombinations(str) {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      console.log(str.slice(i, j));
    }
  }
}
possibleCombinations(str);
