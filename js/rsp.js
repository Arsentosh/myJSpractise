// My solving :)
const gameThing = ["rock", "scissors", "paper"];

// const usersThing = prompt("Choose from rock, scissors or paper");
const rockBtn = document.querySelector(".rock-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const paperBtn = document.querySelector(".paper-btn");
const gameHistoryList = document.querySelector(".game-history");
let usersThing;

rockBtn.addEventListener("click", () => {
  usersThing = "rock";
  playGame(usersThing);
});

scissorsBtn.addEventListener("click", () => {
  usersThing = "scissors";
  playGame(usersThing);
});

paperBtn.addEventListener("click", () => {
  usersThing = "paper";
  playGame(usersThing);
});

function playGame(usersThing) {
  const robotThing = gameThing[Math.floor(Math.random() * 3)];
  let result = "";

  if (usersThing === robotThing) {
    result = "It's a tie!";
  } else if (
    (usersThing === "rock" && robotThing === "scissors") ||
    (usersThing === "scissors" && robotThing === "paper") ||
    (usersThing === "paper" && robotThing === "rock")
  ) {
    result = "You won!";
  } else {
    result = "You lost. Better luck next time!";
  }
  //   if (usersThing === robotThing) {
  //     console.log(`You chose ${usersThing}`);
  //     console.log(`Bot chose ${robotThing}`);
  //     console.log(`It is tie!`);
  //   } else if (usersThing === "rock" && robotThing === "scissors") {
  //     console.log(`You chose ${usersThing}`);
  //     console.log(`Bot chose ${robotThing}`);
  //     console.log(`You won!`);
  //   } else if (usersThing === "rock" && robotThing === "paper") {
  //     console.log(`You chose ${usersThing}`);
  //     console.log(`Bot chose ${robotThing}`);
  //     console.log(`You lost. Better luck next time!`);
  //   } else if (usersThing === "scissors" && robotThing === "rock") {
  //     console.log(`You chose ${usersThing}`);
  //     console.log(`Bot chose ${robotThing}`);
  //     console.log(`You lost. Better luck next time!`);
  //   } else if (usersThing === "scissors" && robotThing === "paper") {
  //     console.log(`You chose ${usersThing}`);
  //     console.log(`Bot chose ${robotThing}`);
  //     console.log(`You won!`);
  //   } else if (usersThing === "paper" && robotThing === "rock") {
  //     console.log(`You chose ${usersThing}`);
  //     console.log(`Bot chose ${robotThing}`);
  //     console.log(`You won!`);
  //   } else if (usersThing === "paper" && robotThing === "scissors") {
  //     console.log(`You chose ${usersThing}`);
  //     console.log(`Bot chose ${robotThing}`);
  //     console.log(`You lost. Better luck next time!`);
  //   } else {
  //     console.log(
  //       "We are sorry, something went wrong :(. Please write rock, scissors or paper."
  //     );
  //   }
  // }

  const listItem = document.createElement("li");
  listItem.textContent = `You chose ${usersThing}, bot chose ${robotThing}. ${result}`;
  gameHistoryList.appendChild(listItem);

  if (result === "You won!") {
    listItem.classList.add("green");
    listItem.classList.add("list-item");
  } else if (result === "You lost. Better luck next time!") {
    listItem.classList.add("red");
    listItem.classList.add("list-item");
  }
}

// const gameHistoryList = document.querySelector(".game-history");

// userChoice.forEach((game) => {
//   const li = document.createElement("li");
//   li.textContent = game;
//   li.classList.add("item");
//   ingredientList.appendChild(li);
// });

// Solving #2
// function getUserChoice() {
//   const userChoice = prompt(
//     "Choose from rock, scissors, or paper"
//   ).toLowerCase();
//   if (
//     userChoice === "rock" ||
//     userChoice === "scissors" ||
//     userChoice === "paper"
//   ) {
//     return userChoice;
//   } else {
//     console.log("Invalid choice. Please choose rock, scissors, or paper.");
//     return getUserChoice();
//   }
// }

// function getRobotChoice() {
//   const gameThings = ["rock", "scissors", "paper"];
//   return gameThings[Math.floor(Math.random() * gameThings.length)];
// }

// function determineWinner(userChoice, robotChoice) {
//   if (userChoice === robotChoice) {
//     return "It's a tie!";
//   } else if (
//     (userChoice === "rock" && robotChoice === "scissors") ||
//     (userChoice === "scissors" && robotChoice === "paper") ||
//     (userChoice === "paper" && robotChoice === "rock")
//   ) {
//     return "You won!";
//   } else {
//     return "You lost. Better luck next time!";
//   }
// }

// function playGame() {
//   const userChoice = getUserChoice();
//   const robotChoice = getRobotChoice();
//   console.log(`You chose ${userChoice}`);
//   console.log(`Bot chose ${robotChoice}`);
//   console.log(determineWinner(userChoice, robotChoice));
// }

// playGame();

// const gameThing = ["rock", "scissors", "paper"];
// const usersThing = prompt("Choose from rock, scissors or paper");
// const robotThing = gameThing[Math.floor(Math.random() * 3)];

// console.log(`You chose ${usersThing}`);
// console.log(`Bot chose ${robotThing}`);

// Solving #3
// if (usersThing === robotThing) {
//   console.log("It's a tie!");
// } else if (
//   (usersThing === "rock" && robotThing === "scissors") ||
//   (usersThing === "scissors" && robotThing === "paper") ||
//   (usersThing === "paper" && robotThing === "rock")
// ) {
//   console.log("You won!");
// } else if (
//   (robotThing === "rock" && usersThing === "scissors") ||
//   (robotThing === "scissors" && usersThing === "paper") ||
//   (robotThing === "paper" && usersThing === "rock")
// ) {
//   console.log("You lost. Better luck next time!");
// } else {
//   console.log("Something went wrong :(. Please write rock, scissors or paper.");d
// }
