const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const numberOfCase = input[0];
  for (let i = 1; i <= numberOfCase; i++) {
    const newInput = input[i].split(' ').map(element => Number(element));
    console.log(newInput[0] + newInput[1]);
  }
  process.exit();
});

