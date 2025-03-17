const playGame = require("../core/engine");

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const num3 = Math.floor(Math.random() * 50) + 1;

  const question = `${num1} ${num2} ${num3}`;
  const correctAnswer = lcm(lcm(num1, num2), num3).toString();

  return [question, correctAnswer];
};

const description = "Find the smallest common multiple of given numbers.";
const startLcmGame = () => playGame(description, generateRound);

module.exports = startLcmGame;
