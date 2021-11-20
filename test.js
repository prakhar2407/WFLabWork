const arr = [1, -1, -2, -3, 4, -5, 6];
const negativePrint = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log(arr[i]);
    }
  }
};

function divisibleBy5(number, callback) {
  if (number % 5 === 0) {
    console.log("Number is divisble by 5");
  } else {
    console.log("Number is not divisble by 5");
  }
  callback(number);
}

function divisibleBy7(number) {
  if (number % 7 === 0) {
    console.log("Number is divisble by 7");
  } else {
    console.log("Number is not divisble by 7");
  }
}

divisibleBy5(8, divisibleBy7);

let Book = {
  Publisher: "Prakhar Bansal Company",
  Price: 100,
  Name: "Harry Potter and the goblet of fire",
};

function Book(publisher, price, name) {
  return {
    name: name,
    price: price,
    publisher: publisher,
}

let b21 = new Book("Prakhar Bansal", 100, "Hary P");
let b2 = new Book("Prakhar Bansal", 100, "Hary Po");
let b3 = new Book("Prakhar Bansal", 100, "Hary Pot");
