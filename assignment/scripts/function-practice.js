console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let name = "Joe";
function helloName( name ) {
  return 'Hello, ' + name + "!";
}
// Remember to call the function to test
console.log('Test - should say, "Hello, Joe!" Says: ' + helloName(name))

// 3. Function to add two numbers together & return the result
let firstNumber = 2;
let secondNumber = 2;
function addNumbers(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
  // return firstNumber + secondNumber;
}
console.log('Test - should say, "4" Says: ' + addNumbers(firstNumber, secondNumber));

// 4. Function to multiply three numbers & return the result
let numT1 = 3;
let numT2 = 3;
let numT3 = 3;
function multiplyThree(num1, num2, num3){
  let product = num1 * num2 * num3;
  return product;
}
console.log('Test - should say "27" Says: ' + multiplyThree(numT1, numT2, numT3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let testArray = [0, 1, 2, 3]
function getLast( array ) {
  return array[array.length-1];
}
console.log('Test - should say "3" Says: ' + getLast(testArray))

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let test7Array = [0, 1, 2, 3, 4, 5];
let test7Value = 4;
function find(value, array){
  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}
console.log('Test - should say "true" Says: ' + find(test7Value, test7Array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let testArray9 = [1, 1, 1, 1]
function sumAll( ) {
  let sum = 0
  for(let i = 0; i < testArray9.length; i++){
    sum = sum + testArray9[i];
  }
  // TODO: loop to add items
  return sum;
}
console.log('Test - Should say, "4" Says: ' + sumAll(testArray9));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
