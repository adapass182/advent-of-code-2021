const fs = require('fs');

const runDay_1_a = () => {
  const inputArray = fs
    .readFileSync('./input.txt', { encoding: 'ascii' })
    .split('\n');

  let result = 1;

  for (i = 1; i < inputArray.length; i++) {
    if (inputArray[i] > inputArray[i - 1]) result++;
  }

  console.log(result);
};

runDay_1_a();
