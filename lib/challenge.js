/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

function sayHello() {
  console.log('hello world');
}

sayHello();

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

let myMessage = "hi Teo!!!!"

function print(message) {
  console.log(message)
}
print(myMessage);

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

 myMessageTwo = "Teo Rocks!"

 function printMessage(message) {
   console.log("Today\'s message is: " + message);
 }

 printMessage(myMessageTwo);


/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
function squareA(a) {
  return a ** 2;
}

console.log(squareA(4));

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

 let myString = "hello";
 let emptyArray = [];

 function reverseMessage(message) {
  let splitString = message.split("");
  for (let i = splitString.length-1; i >=0; i --) {
    emptyArray.push(splitString[i]);
  }
  return emptyArray.join('');
 }
 console.log(reverseMessage(myString));

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */

 function multiply(a, b = 2) {
   return a * b;
 }

 console.log(multiply(5));


/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
let newPerson = {};
function makePerson(firstname, lastname) {
 newPerson.firstName = firstname;
 newPerson.lastName = lastname;
}

const zakk = makePerson('Zakk', 'F')
const jimmy = makePerson('Jimmy', 'B')

console.log(zakk);

/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */


/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */


/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
let sum = 0


/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */


/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */


/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
testFunc()()



/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
// function add(a, b) {
//   return a + b
// }


/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */


