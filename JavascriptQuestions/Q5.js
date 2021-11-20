var str = prompt("Enter String");
console.log(toUpper(str));
function toUpper(str) {
  var arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  res = arr.join(" ");
  return res;
}
