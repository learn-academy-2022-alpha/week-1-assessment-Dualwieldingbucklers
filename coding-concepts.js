// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer:

//I think this is going to return the number 10 because .length when applied to a string is going to count the number of character in that string, including spaces.

// b) Verify and explain:

//So I was correct, because console.log() is used to display information in the terminal. Cohort is the variable being accessed, and the .length property is simply counting the amount of characters in that variable.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:

// I think this will log the letter "o" from the string because of the fourth character being accessed.

// b) Verify and explain:

// So in counting the characters in the const greeting, I was careful to remember that accessors of arrays or strings are zero indexed, meaning the first item is in the 0th position. What helped me remember this at first is how in some places the first floor is on the second lever while the ground floor is on the first level.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:

//I think this is going to return the string "Ruby" since index was assigned the value of 1 they're sort of interchangeable.

// b) Verify and explain:

// So I was right BECAUSE of the assignment operator giving the const index the value of one. Using index as the number one in my accessor, the program counted to 1 through the array with the indexed information being separated by commas.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:

//I think this will make each starting letter of each string upper case.

// b) Verify and explain:

//The console.log returned an error and, after some digging, I was reminded that methods can't be used to modify an entire array. Afterward, I used the .toUpperCase on an indexed item in the array by using console.log(weekendDays[1].toUpperCase()) my output was SUNDAY in all caps, so I was also wrong about what was going to be made upper case.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:

//I think this is going to return the word "number" because datatypes.length will return the number 3 and typeof will evaluate that three as a number.

// b) Verify and explain:

//I can see where some would think typeof would return an object, because an array is an object, but the kicker is the .length which means typeof is referencing the .length number output and informing us of just that.

//I can also see where some would think that typeof would return "string, string, string" here, because that is the type of data at each index. This would need to be accomplished by calling each typeof index in the console log separately like so (I could also split the console logs to separate lines if I want the terminal to do the same)
// console.log(typeof dataTypes[0],typeof dataTypes[1],typeof dataTypes[2])

//I also looked up the spread operator, which I was hoping might give me a different result. It didn't, but I wonder if I could modify my code to where it might without having to running some kind of for loop.
//console.log(typeof ...dataTypes)
