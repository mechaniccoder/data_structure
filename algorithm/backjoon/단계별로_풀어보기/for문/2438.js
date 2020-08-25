const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let s = '';

for (let i = 1; i <= Number(input); i++) {
  s += '*'
  console.log(s);
}

