var str = prompt("Enter String");
function check_palindrome(str);
function check_palindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let y = str[j - i];
    if (x != y) {
      return false;
    }
  }
  return true;
}
