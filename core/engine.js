const readlineSync = require("readline-sync");

const ROUNDS_COUNT = 3;

const playGame = (gameDescription, generateRound) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!\n`);
  console.log(gameDescription);

  for (let i = 0; i < ROUNDS_COUNT; i++) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log("Correct!\n");
  }

  console.log(`Congratulations, ${userName}!`);
};

module.exports = playGame;
