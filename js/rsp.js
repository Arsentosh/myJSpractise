// My solving :)
// const gameThing = ["rock", "scissors", "paper"];

// // alert(
// //   "Let's play rock, scissors, paper game. Rules are really simple. Rock beats scissors, scissors beats paper and paper beats rock."
// // );
// const usersThing = prompt("Choose from rock, scissors or paper");
// const robotThing = gameThing[Math.floor(Math.random() * 3)];
// if (usersThing === robotThing) {
//   console.log(`You chose ${usersThing}`);
//   console.log(`Bot chose ${robotThing}`);
//   console.log(`It is tie!`);
// } else if (usersThing === "rock" && robotThing === "scissors") {
//   console.log(`You chose ${usersThing}`);
//   console.log(`Bot chose ${robotThing}`);
//   console.log(`You won!`);
// } else if (usersThing === "rock" && robotThing === "paper") {
//   console.log(`You chose ${usersThing}`);
//   console.log(`Bot chose ${robotThing}`);
//   console.log(`You lost. Better luck next time!`);
// } else if (usersThing === "scissors" && robotThing === "rock") {
//   console.log(`You chose ${usersThing}`);
//   console.log(`Bot chose ${robotThing}`);
//   console.log(`You lost. Better luck next time!`);
// } else if (usersThing === "scissors" && robotThing === "paper") {
//   console.log(`You chose ${usersThing}`);
//   console.log(`Bot chose ${robotThing}`);
//   console.log(`You won!`);
// } else if (usersThing === "paper" && robotThing === "rock") {
//   console.log(`You chose ${usersThing}`);
//   console.log(`Bot chose ${robotThing}`);
//   console.log(`You won!`);
// } else if (usersThing === "paper" && robotThing === "scissors") {
//   console.log(`You chose ${usersThing}`);
//   console.log(`Bot chose ${robotThing}`);
//   console.log(`You lost. Better luck next time!`);
// } else {
//   console.log(
//     "We are sorry, something went wrong :(. Please write rock, scissors or paper."
//   );
// }

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
