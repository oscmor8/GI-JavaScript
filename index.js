// VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”

let num1 = 6;
let num2 = 4;
let diff = num1 - num2;

console.log(`The difference between ${num1} and ${num2} is ${diff}`); 

// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                                                                 Example output: “The name Thomas is longer than John by 2 characters”

let name1 = "Oscar"
let name2 = "Jose"
let nameDiff = name1.length - name2.length

console.log(`The name ${name1} is longer than ${name2} by ${nameDiff}`)

// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.


let input = prompt("Type your message: ")
function formFunc(){
    if (input === input.toUpperCase()){
        console.log("Stop Shouting!")
    } else if (input === input.toLowerCase()){
        console.log("Why are you wispering?")
    } else 
    console.log("Thank you for talking normally")
}

let result = formFunc (input)

// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.



// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"


