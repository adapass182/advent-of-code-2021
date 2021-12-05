const fs = require('fs');

const runDay_1_b = () => {
  const inputArray = fs
    .readFileSync('./input.txt', { encoding: 'ascii' })
    .split('\n');

  let result = 0;

  const numArray = inputArray.map((i) => parseInt(i));

  for (i = 0; i + 3 < numArray.length; i++) {
    let sum_1 = numArray[i] + numArray[i + 1] + numArray[i + 2];
    let sum_2 = numArray[i + 1] + numArray[i + 2] + numArray[i + 3];
    if (sum_2 > sum_1) {
      result++;
    }
  }

  console.log(result);
};

runDay_1_b();
