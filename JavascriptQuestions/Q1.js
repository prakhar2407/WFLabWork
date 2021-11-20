var num = prompt("Enter Number to reverse");
parseInt(num);
console.log("ReverseNumber of 12345 ==> " + reverse(num));
function reverse(num) {
  var result = 0;
  while (num > 0) {
    lastNumber = parseInt(num % 10);
    num = parseInt(num / 10);
    if (result === 0) {
      result = result + lastNumber;
    } else {
      result = result * 10 + lastNumber;
    }
  }
  return result;
}
