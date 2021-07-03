const readline = require('readline');
const fs = require('fs').promises;
const { program } = require('commander');
require('colors');
program.option('-f, --file [type]', 'file for saving game results', 'cli-game/results.txt');

program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = value => {
  if (isNaN(value)) {
    console.log('Enter a number!'.red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log('The number must be between 1 and 10 ');
    return false;
  }
  return true;
};

const log = async data => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log(`Successfully saved to file ${logFile}`.green);
  } catch (error) {
    console.log(`The file ${logFile} could not be saved`.red);
  }
};

const game = () => {
  rl.question('enter the number between 1 and 10: '.yellow, value => {
    let a = +value;
    if (!isValid(a)) {
      game();
      return;
    }
    count += 1;
    if (a === mind) {
      console.log('Congratulations! You guessed the number in %d steps'.green, count);
      log(
        `${new Date().toLocaleDateString()}: Congatulations, you have guessed the number in ${count} steps`,
      ).finally(() => rl.close());
      return;
    }
    console.log('You have not guessed. Try again'.red);
    game();
  });
};

game();
