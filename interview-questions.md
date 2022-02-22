# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

  Your answer:

  Researched answer:



1. What is git? What is the difference between git and Github?

  Your answer:

  Git is a version control program that occurs locally and remotely, meaning on your personal device and on the internet respectively. Github is a remotely occurring website that communicates with Git technology where it is possible to create folders known as repositories to store and share files and their version history as you make and update them.

  Researched answer:

  Git's version control can happen locally without even having to access Github. Github is just a common cloud based host that enables sharing and and collaborating using Git. Multiple parties can collaborate on the same version of a project and save staged changes without changing the living version of a project until their changes are merged by a project administrator.


2. Which JavaScript operators will return a Boolean value?

  Your answer:

  Boolean is the term used for true or false statements. There are three operators that will return a Boolean value.  

  The loosely equals operator, denoted by two consecutive equals signs,== is more flexible with its definition of equivalence. For example if the operator was to be applied to the string of characters "42" and the numerical value of 42, the Boolean value would be true due to them both being 42, despite being different data types.

  The strictly equals operator, represented by === is a lot pickier and will only return true if the data type and the value are the same. In the same example of "42" === 42, strictly equals would return false. Interestingly enough if a the variable assessmentNumber were to be assigned the value of 42, the variable itself would take on that new value and assessmentNumber === 42 would return a true value.

  The "not operator" or the "Bang! operator," written !== (the exclamation mark replaces one of the equals in ===) will be true if the values being compared DO NOT match.

  Researched answer:

  It looks like I thought this questions was specifically about Equality Operators and I completely forgot about Relational Operators and Logical operators. The Relational Operators are >, <, <=, and >=. The Logical Operators are ||, &&, and !. All of these are capable of returning a Boolean value as long as the variable isn't undefined.

3. What is an index? What is the difference between index and value?

  ---Your answer:

  An index is the position number of information in an array or string counting from left to right and including 0. Including zero in the counting is called Zero Based Indexing. A value is just defined information but, when applied to an array, a value is the information contained at the specified index location.

  Example: ["Eggs","Bread","Coffee","Milk","Cheese"]
  The index values in this array would be 0,1,2,3, and 4. The value at index 3 would be Milk.

  ---Researched answer:

  Similar to my answer, a better way of describing an index is as a sequential number address for all elements in an array. The index can be used to fetch the value in the array if the index exists. Trying to access an index that doesn't exist like attempting to reference the index of 5 in the previous example will return a value of undefined.

4. What is iteration?

  ---Your answer:

  In my experience, iteration is deconstructing a process into a series of extra steps what information can and cannot already be assumed until the process is executed correctly.  

  ---Researched answer

  The syllabus better defines iteration as "the process of performing a particular action a certain number of times or until a condition is met." Further research shows me that For Loops and While Loops are a very common form of this, which makes sense. I initially thought if/else statements could be considered iteration on their own, but it seems like looping is required. If/else statements as I understand could have multiple steps, but the information is just being run through them once.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  ---Your answer:

  Pair programming consists of two roles, the driver and the navigator.

  The navigator is the planner and the "hands off" role. They help map out how the program is going to run and it's their job to be vigilantly reading as the driver types in case of errors, inconsistencies, organization that is difficult to read. The navigator is the eyes and ears of the operation, more responsible for the seeing the big picture and being mindful of roadblocks along the way.

  The driver is the doer and the "hands on" role. The driver is the one typing out the program, keeping proper syntax and organization to the best of their ability.

  Both parties are planning and working on achieving the same goal, but both also have a different view and perspective of what is going on in the moment.

  ---Researched answer:

  I've also seen the navigator called the observer, who is constantly reviewing and strategizing so the driver can focus on the tactical elements of the objective. The outcome of pair programming seems to not only be cleaner code with less errors, but higher productivity through accountability, a second perspective based on previous experiences, different angles to a problem, team building, and bridging the gap between skill levels, higher work enjoyment, and even more confidence in one's work.

  Also not included in my answer, is the idea that roles are switching on agreed upon intervals. The Pomodoro technique specifically suggests 25 minutes intervals with planned 5 minute breaks in between switching.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:

A Higher Order Function can use a function as a parameter or can return another function once the higher order function is complete. What I think this means is that a Higher Order Function helps use functions inside other functions or as a result of other functions.

2. Jest:

Most information I'm getting on Jest is that it is a Javascript and React testing Application Programming Interface (API). What I'm uncertain of is the advantage it provides when we've already been able to see when our functions, for loops, and statements work in terminal and when they don't.

3. Objects:

Objects seem to be a way of storing properties of a variable using a process called encapsulation. From what I've gathered, an object is the least specific variable smaller properties called classes that can be individually modified to set it apart from other variables that share the same name.

4. Method:

What I got from methods is that they are object oriented functions that accesses classes of an object. Kind of like how some methods are "built in," but I assume some I will make myself and invoke them.

5. Classes:

A class is a way to create multiple versions or instances of an object. I imagine this is how websites track different usernames. Each individual username, being of a different property, could be given a class applied under the object of "user."
