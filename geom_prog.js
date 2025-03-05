const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateProgression(start, ratio, length) {
  return Array.from({ length }, (_, i) => start * ratio ** i);
}

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function startGame() {
  console.log("Welcome to the Brain Games!");
  const name = await askQuestion("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What number is missing in the progression?\n");

  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const start = Math.floor(Math.random() * 5) + 1;
    const ratio = Math.floor(Math.random() * 5) + 2;
    const length = Math.floor(Math.random() * 6) + 5; // От 5 до 10 чисел
    const progression = generateProgression(start, ratio, length);

    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = "..";

    console.log(`Question: ${progression.join(" ")}`);
    const userAnswer = await askQuestion("Your answer: ");

    if (parseInt(userAnswer) === correctAnswer) {
      console.log("Correct!\n");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      rl.close();
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
  rl.close();
}

startGame();
