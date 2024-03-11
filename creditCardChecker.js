// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

//Adding a function taht turns strings into arrays
const stringToArray = (str) => {
  let Arr = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "0":
        Arr.push(0);
        break;
      case "1":
        Arr.push(1);
        break;
      case "2":
        Arr.push(2);
        break;
      case "3":
        Arr.push(3);
        break;
      case "4":
        Arr.push(4);
        break;
      case "5":
        Arr.push(5);
        break;
      case "6":
        Arr.push(6);
        break;
      case "7":
        Arr.push(7);
        break;
      case "8":
        Arr.push(8);
        break;
      case "9":
        Arr.push(9);
        break;
    }
  }
  return Arr;
};

//console.log(stringToArray('12353412'));

// Add your functions below:

const validateCred = (arr) => {
  let luhnArr = [];

  //I create an if statement that converts string to arr with numbers
  if (typeof arr === "string") {
    arr = stringToArray(arr);
  }

  //I reverse the array
  const reversed = arr.reverse();

  //For loop that revers the array and removes the last number
  for (let i = 1; i < reversed.length; i++) {
    //console.log(i);
    //If statemnet that checks if the number is odd
    if (i % 2 === 0) {
      luhnArr.push(arr[i]);
    }
    if (i % 2 != 0) {
      arr[i] = arr[i] * 2;

      //Nested if statemnet that checks if the number is above 9
      if (arr[i] > 9) {
        arr[i] = arr[i] - 9;
      }
      luhnArr.push(arr[i]);
    }
  }

  //return luhnArr; //Prints array
  //Reduce to get the sum of the luhnArr
  let sum = luhnArr.reduce((a, c) => a + c);

  //return sum; //Prints the sum from reduce

  //If statemnet that checks if the card is valid or invalid
  if (10 - (sum % 10) === reversed[0]) {
    return "valid";
  } else {
    return "invalid";
  }
};

console.log(validateCred("4539 6779 0801 6808"));

//I create a callback function that finds all the invalid cards from the batch array
const findInvalidCards = (arr) => {
  let validCards = [];
  let inValidCards = [];
  for (let i = 0; i < arr.length; i++) {
    if (validateCred(arr[i]) === "valid") {
      validCards.push(arr[i]);
    } else {
      inValidCards.push(arr[i]);
    }
  }
  return inValidCards;
};

//console.log(findInvalidCards(batch));

//Save the invalidcard array to a variable
let inValidCards1 = findInvalidCards(batch);

const idInvalidCardCompanies = (arr) => {
  let amex = 0;
  let visa = 0;
  let mastercard = 0;
  let discover = 0;
  let companyNotFound = 0;

  for (let i = 0; i < arr.length; i++) {
    //An if statemnet that increments the card company with 1 for every invalid card they have
    if (arr[i][0] === 3) {
      amex++;
    } else if (arr[i][0] === 4) {
      visa++;
    } else if (arr[i][0] === 5) {
      mastercard++;
    } else if (arr[i][0] === 6) {
      discover++;
    } else {
      companyNotFound++;
    }
  }

  //Return the result of the if statemnet
  return `Amex: ${amex}! Visa: ${visa}! Mastercard: ${mastercard}! Discover: ${discover}! Card company not found: ${companyNotFound}!`;
};

//console.log(idInvalidCardCompanies(inValidCards1));
