// A function which accepts another function as an argument or returns any function is called higher order function, whereas the function which is passed as a parameter in another function (or you may call higher order function) is known as call back function.
function copyArrayAndManipulate(arr, instructions) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      output.push(instructions(arr[i]));
    }
    return output;
  }
  
  function multiplyBy2(input) {
    return input * 2;
  }
  const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

  function sayHello() {
    console.log("Hello");
  }
// function which is passed as a parameter in another function (or you may call higher order function) is known as call back function.
  setTimeout(sayHello, 1000);
  console.log("Me first!")

//   First Class Functions

// A first class function is a function that was built with the intention of being passed around to other functions. It does one specific thing, does not have side effects, and is not intended to be called directly, but rather, to be used by ‘other functions.’

// Those ‘other functions’ which accept one of those ‘first class functions’ as an argument are called higher order functions. Higher order functions also might be functions that return a function.


var add = (x, y) => x + y;
var subtract = (x, y) => x - y;
var multiply = (x, y) => x * y;
function numbers(fn, x, y){
  return fn(x, y);
}
var addResult = numbers(add, 3, 2);
var subtractResult = numbers(subtract, 3, 2);
var multiplyResult = numbers(multiply, 3, 2);

var nums = [1, 2, 3, 4, 5];
var numsTimesTwo = nums.map(num => num * 2);
// numsTimesTwo = [2, 4, 6, 8, 10];

// ===========================================================================================================================================

// The .map() function is a higher order function that will run a callback on every item in the array and will push each result into a new array.

var nums = [1, 2, 3, 4, 5];
var multiplyByTwo = num => num * 2;
var numsTimesTwo = nums.map(multiplyByTwo);
// nums.map(multiplyByTwo) 
// would be exactly the same as
// nums.map(num => num * 2)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// The .filter() function will run a callback function on every item in an array and will return either true or false for each item. If true, it will push the item to the new array.

var nums = [1, 2, 3, 4, 5];
var oddNumbers = nums.filter(num => num % 2 !== 0 );
// oddNumbers = [1, 3, 5];
console.log(oddNumbers)

var nums = [1, 2, 3, 4, 5];
var isOdd = num => num % 2 !== 0;
var oddNumbers = nums.filter(isOdd);


// *******************************************************************************************************************************************
// Here is the reason… Because the purpose of functional programming, and coding in general actually, is to write reusable code. Don’t repeat yourself!

// So, in the above example for .filter() we wrote a first class function isOdd. Now, we can use isOdd in any other function in the whole program. Let’s keep going with more higher order functions, but now we’ll use the isOdd function.

// The .every() function will run a callback function on every item in the array checking for a returned true or false value. If every item in the array returns true, it will return true. If any item in the array returns false, it will stop its loop and immediately return false.

var nums = [1, 2, 3, 4, 5];
if( nums.every(isOdd) ){
  console.log('Yes, they are all odd!');
} else {
  console.log('Nope, they are not all odd!');
}

// The .some() function will run a callback function on every item in an array checking for a returned true or false value. If any item in the array returns true, it will return true. If all of the items in the array returns false it will return false. As soon as it gets one true value it will stop the loop and return true.

var nums = [1, 2, 3, 4, 5];
if( nums.some(isOdd) ){
  console.log('At least one of these numbers are odd!');
} else {
  console.log('None of these numbers are odd!');
}