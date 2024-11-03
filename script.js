// Rock-Paper-Scissors Game

// This connects the button to the function so it works when clicked
document.getElementById("button").addEventListener("click", function () {
  // This gets what the user types from the text box
  let input = document.getElementById("input").value;
  console.log("User input:", input);

  // These are valid options the user can choose
  let options = ["rock", "paper", "scissors"];
  console.log("Available options:", options);

  // This will validate the input and give an error message if anything else is entered other than the options in the array
  if (options.indexOf(input) === -1) {
    document.getElementById("result").innerText =
      "Oops! Please type rock, paper, or scissors.";
    console.log("Invalid input provided by user:", input);
    return;
  }

  // This randomly picks one of the options in the array and displays it as "rock, paper, or scissors"
  let random = Math.floor(Math.random() * 3);
  console.log("Random index for computer choice:", random);
  let computerChoice = options[random];
  console.log("Computer's choice:", computerChoice);

  let resultMessage;

  // This determinds the winner based on rules set by the if/else statements
  if (input === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (
    (input === "rock" && computerChoice === "scissors") ||
    (input === "paper" && computerChoice === "rock") ||
    (input === "scissors" && computerChoice === "paper")
  ) {
    //This iteration increases the score board by one point each win.
    resultMessage = "You win!";
    userScore++;
  } else {
    resultMessage = "Computer wins!";
    computerScore++;
  }

  // This shows the winner
  document.getElementById("result").innerText =
    "Computer chose: " + computerChoice + ". " + resultMessage;
  console.log(
    "Final output message:",
    document.getElementById("result").innerText
  );

  updateScores();
});

let userScore = 0;
let computerScore = 0;

// This updates the score
function updateScores() {
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
}

// This resets the score when the reset-button is clicked
document.getElementById("reset-button").addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;
  updateScores();

  // This displayes the reset message with the updated scores
  document.getElementById("result").innerText = "Scores have been reset!";
  console.log(
    "Scores reset. User Score:",
    userScore,
    "Computer Score:",
    computerScore
  );
});
