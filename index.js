const startProgressionGame = require("./games/progression");
const startLcmGame = require("./games/lcm");

const gameChoice = process.argv[2]; // Получаем аргумент командной строки

if (gameChoice === "progression") {
  startProgressionGame();
} else if (gameChoice === "lcm") {
  startLcmGame();
} else {
  console.log("Please choose a valid game: 'progression' or 'lcm'");
}
