var num = prompt("Enter Number");
primeCheck(parseInt(num));
function primeCheck(num) {
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % parseInt(i) === 0) {
      console.log("Composite");
      return;
    }
  }
  console.log("Prime");
}
