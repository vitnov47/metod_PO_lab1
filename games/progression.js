const playGame = require("../core/engine");

const generateProgression = (start, ratio, length) => {
  return Array.from({ length }, (_, i) => start * ratio ** i);
};

const generateRound = () => {
  const start = Math.floor(Math.random() * 10) + 1;
  const ratio = Math.floor(Math.random() * 5) + 2;
  const length = 10;
  const progression = generateProgression(start, ratio, length);

  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = "..";

  return [progression.join(" "), correctAnswer];
};

const description = "What number is missing in the progression?";
const startProgressionGame = () => playGame(description, generateRound);

module.exports = startProgressionGame;
