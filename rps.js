let playRps = true;
let deeWins = 0;
let devinWins = 0;


while (playRps) {
  // Get the user's input of rock, paper, or scissors//
  let devinInput = prompt("Choose rock, paper, or scissors:");

  // Validate that the user entered a valid choice//
  if (devinInput !== "rock" && devinInput !== "paper" && devinInput !== "scissors") {
    prompt("Invalid input! Please choose rock, paper, or scissors:");
  }

  // Randomly select the computer’s choice//
  const deeInput = ["rock", "paper", "scissors"]
  [Math.floor(Math.random() * 3)];

  // Determine a winner and display/log the number of accumulated wins/losses//
  if (devinInput === deeInput){
  console.log("Its a tie");
  } else if
  (devinInput === "rock" && deeInput === "scissors" ||
  devinInput === "paper" && deeInput === "rock" ||
  devinInput === "scissors" && deeInput === "paper") 
  {
    console.log("You win!");
    devinWins++;
  } else  
  (deeInput === "rock" && devinInput === "scissors" ||
  deeInput === "paper" && devinInput === "rock" ||
  deeInput === "scissors" && devinInput === "paper") 
  {
    console.log("You lose!");
    deeWins++;
  } 

  console.log(`Devin Wins: ${devinWins}`);
  console.log(`Dee Wins: ${deeWins}`);

  // Ask the user if they would like to keep playing//

  const keepPlaying = prompt("Do you want to play again? Yes or No");
  if (keepPlaying === "yes"){
    playRps = true;
  } else (playRps = false);
}
