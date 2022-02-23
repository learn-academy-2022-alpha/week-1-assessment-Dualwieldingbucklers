// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"





// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//PSEUDOCODE
// Create a function called boilingPoint with the parameter of waterTemp
// Create a set of conditionals for less than, strictly equal to, and greater than 212.
//Have each conditional return an interpolated input and its appropriate string
//Run a console.log for boilingPoint plugging each of temps1, 2, and 3 into the parameter.

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (waterTemp) => {
  if (waterTemp === 212) {
    return `${waterTemp} is at boiling point`
  }else if (waterTemp > 212) {
    return `${waterTemp} is above boiling point`
  }else if (waterTemp < 212) {
    return `${waterTemp} is below boiling point`
  }
}
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

//Question! I accidentally forgot to declare my function a var/let/const at first but it still worked. Does this mean it defaulted to var?





// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

//PSEUDOCODE
//I'm going to declare a const named both where both arrays are going to be combined without changing the origainal declared consts.
//Using the built-in method .concat I'm going to concatenate myNumbers2 to the end of myNumbers1 and assign the newly created array to the const both1
//I'm then going to console.log the .length property of my new const both1

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]


const both1 = myNumbers1.concat(myNumbers2)
console.log(both1.length)

//EXTRA EXAMPLES EXPLAINED
//I also played around with a different format of .concat, the spread syntax, and using push.
//I learned that if I don't use the spread syntax outside of concatenation, then I will only get the first number of an array.

//EXTRA EXAMPLE 1
// const both2 = [].concat(myNumbers1,myNumbers2)
// console.log(both2.length)
//EXPLAINED
//I'm pretty sure this just means I'm concatenating an array and then invoking the two arrays as the argument.

//EXTRA EXAMPLE 2
// const both3 = [...myNumbers1,...myNumbers2]
// console.log(both3.length)
//EXPLAINED
//Declaring both 3 and not using spread syntax on either array and logging my new const.length would give me 2.

//EXTRA EXAMPLE 3
// myNumbers1.push(...myNumbers2)
// console.log(myNumbers1.length)
//EXPLAINED
//myNumbers1.push would give me my entire first array, but the the spread syntax is what is helping me push my entire second array instead of just one number from it. In that same example,  it is technically pushing those numbers on to myNumbers1, which means trying to declare a new const was giving me an output of undefined. Instead, I had to console.log my new numbers1 const.





// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

//PSEUDOCODE
//To my understanding there isn't really a method for just reversing the characters in a string, so I'm going to turn it into an array of split characters so the order of everything is rearranged and not just the words.
//Next I'm going to reverse my cohortArray and assign it to the new const reversedCohortArray.
//Then I'm going to log a joined version of my reversed array.

const currentCohort = "Alpha 2022"

const cohortArray = currentCohort.split("")
const reversedCohortArray = cohortArray.reverse()
console.log(reversedCohortArray.join(""))

//EXTRA EXAMPLE (this one i pulled off the internet and reformatted it to use the syntax we've been practicing)
// const reverseString = (str) => {
//     let newString = ""
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i]
//     }
//     return newString
// }
// console.log(reverseString(currentCohort))
//EXPLAINED
////I also saw a function on the internet that could flip the string by use of a for loop. I just copy pasted this one, but I thought I'd try to explain my way through it.
//step 1: created a function named reverseString that takes the parameter str
//step 2: declared the variable newString and left it empty for the addition assignment operator later
//step 3: created a for loop that declares the last letter of the string as i. The str.length-1 accounts for the zero indexing and is going to decrement through the string from its end by 1 all the way through zero.
//step 4: added the indexed letter to the newString.
//step 5: ends the function and returns the newString.
//step 6: logs the function with the argument of currentCohort





// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

//PSEUDOCODE
//I should create a for loop that increments through each index in my array
//I should make an if statement that runs a modulo 2 on the data value at each index
//If the modulo output is not strictle equal to zero, I'll have it declare the indexed value and interpolate it into a string of backticks that says it's odd.
//I'll write a similar else statement that logs everything else as even

const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++){
  if (myArray[i] % 2 !== 0){
    console.log(`${myArray[i]} is odd`)
  } else {
    console.log(`${myArray[i]} is even`)
  }
}





// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

//PSEUDOCODE
//I'll make a function called difference and assign it two parameters to invoke
//I'll make an if else statements that will compare the two and only subtract the smaller from the larger with a final else that returns zero if they're equivalent.
//I'll log set one and set two separately


// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const difference = (n1,n2) => {
  if (n1 > n2){
    return (n1 - n2)
  } else if (n2 > n1){
    return (n2 - n1)
  } else {
    return 0
  }
}
console.log(difference(number1,number2))
console.log(difference(number3,number4))
