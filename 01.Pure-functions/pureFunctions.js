/**
 * 1. PF depends ot its arguments
 * 2. PF should always return the same results
 * 3. PF should always return a result
 */
const c = 3;
const test = (a, b) => {
  const sumAandB = a + b;
  return sumAandB;
};

const resultSum = test(3, 5);
