var str = prompt("Enter String for alphabetical order");
function alphabeticalOrder(str) {
  var arr = str.split("");
  res = arr.sort().join("");
  return res;
}
console.log(alphabeticalOrder(str));
