const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const number = Number(input[0]);
let result = 0;

for ( let i = 1; i <= number; i++ ) {
  result += i
}

console.log(result);