// // // VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”

// let num1 = 6;
// let num2 = 4;
// let diff = num1 - num2;

// console.log(`The difference between ${num1} and ${num2} is ${diff}`); 

// // // EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                                                                 Example output: “The name Thomas is longer than John by 2 characters”

// let name1 = "Oscar"
// let name2 = "Jose"
// let nameDiff = name1.length - name2.length

// console.log(`The name ${name1} is longer than ${name2} by ${nameDiff}`)

// // // MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.


// let input = prompt("Type your message: ")
// function formFunc(){
//     if (input === input.toUpperCase()){
//         console.log("Stop Shouting!")
//     } else if (input === input.toLowerCase()){
//         console.log("Why are you wispering?")
//     } else 
//     console.log("Thank you for talking normally")
// }

// let result = formFunc (input)

// // // HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

// Addition
// let numImput1 = parseInt(prompt("Enter Number 1: "))
// let numInput2 = parseInt(prompt("Enter Number 2: "))

// function addTwoNumbers(){
//     console.log(numImput1 + numInput2)
// }

// let result2 = addTwoNumbers()

// // Subtraction
// let numImput2 = parseInt(prompt("Enter Number 1: "))
// let numInput3 = parseInt(prompt("Enter Number 2: "))

// function subTwoNumbers(numImput2, numInput3){  // Able to change inside the code ex: numImput 2 and3
//     console.log(numImput2 - numInput3)
// }

// let result3 = subTwoNumbers(numImput2, numInput3)

// // Multiplication
// let numImput4 = parseInt(prompt("Enter Number 1: "))
// let numInput5 = parseInt(prompt("Enter Number 2: "))

// function multTwoNumbers(){
//     console.log(numImput4 * numInput5)
// }

// let result4 = multTwoNumbers()

// // Divide

// let numImput6 = parseInt(prompt("Enter Number 1: "))
// let numInput7 = parseInt(prompt("Enter Number 2: "))

// function divTwoNumbers(){
//     console.log(numImput6 / numInput7)
// }

// let result5 = divTwoNumbers()

// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"


const firstNumIn = parseInt(prompt("Enter First Number"))
const operationSelection = prompt("Enter either +, -, * or /")
const secondNumIn = parseInt(prompt("Enter Second Number"))
let finalResult; 



function simpleCalc(){
    //Validate user input
    if (operationSelection !== "+" && operationSelection !== "-" && operationSelection !=="*" && operationSelection!=="/" ){
        prompt("Invalid Selection Please Choose: + , - , * , /")
    }
    if (isNaN(parseInt(firstNumIn)) ){
         console.log("first Number is not a number");
         return
    }
    if (isNaN(parseInt(secondNumIn)) ){
         console.log("Second Number is not a number");
         return
    }

    // Calculator
    
    if (operationSelection == "+") {
        finalResult = (firstNumIn + secondNumIn)
        return
    }

    else if (operationSelection == "-") {
        finalResult = (firstNumIn - secondNumIn)
        return
    }

    else if (operationSelection == "*") {
        finalResult = (firstNumIn * secondNumIn)
        return
    }

    else {
        finalResult = (firstNumIn / secondNumIn)
        return
    }
}

    simpleCalc()

    console.log(`${firstNumIn} ${operationSelection} ${secondNumIn} = ${finalResult}`);