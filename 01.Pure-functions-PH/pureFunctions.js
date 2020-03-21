/**
 * @description
 * This document has content for pure functions(PF), what the PF are, when to use it and how to defined it. On of the biggest benefit of PF are:
 * Predictability and Testability and Readability
 *
 * Examples with array, object, string, boolean && number will be found in this document.
 * 1. PF depends ot its arguments
 * 2. PF should always return the same results
 * 3. PF should always return a result
 */

const globalVariableThatShouldNotBeUsedInPF = 3;
const sumTwoNumbers = arrayOfArgumentsToBeSummed => {
  const totalSumOfTheArguments = arrayOfArgumentsToBeSummed.reduce(
    (totalResult, nextArgument) => (totalResult += nextArgument)
  );
};

/**
 */

/**
 * Sum numbers from array of numbers.
 * @function
 *  number
 */
const sumTwoNumbers = numbers => {};
