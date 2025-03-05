const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getLCM(a, b) {
  function getGCD(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }
  return (a * b) / getGCD(a, b);
}

function getLCMOfThree(a, b, c) {
  const lcmAB = getLCM(a, b);
  return getLCM(lcmAB, c);
}

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function startGame() {
  console.log("Welcome to the Brain Games!");

  const name = await askQuestion("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Find the smallest common multiple of given numbers.");

  let score = 0;
  let rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const num3 = Math.floor(Math.random() * 20) + 1;

    console.log(`Question: ${num1} ${num2} ${num3}`);

    const userAnswer = await askQuestion("Your answer: ");
    const correctAnswer = getLCMOfThree(num1, num2, num3);

    if (parseInt(userAnswer) === correctAnswer) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Wrong! The correct answer was ${correctAnswer}.`);
    }
  }

  if (score === rounds) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Your score is ${score}. Try again, ${name}!`);
  }

  rl.close();
}

startGame();
