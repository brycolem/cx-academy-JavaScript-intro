/**
 * Accepts any number of parameters of number type and returns the
 * the average of them all.
 *
 * If a param is type string, an attempt is made to convert it to
 * number before dropping it from the calculation.
 *
 * @param {number[]} args
 * @return {number}
 */
export function findAverage(...params) {
  // TODO Use a for loop to iterate over the params, adding each number to
  // a variable tracking the sum

  // TODO If a param is a string, try to convert it to a number

  // TODO Use the isNaN function to check if the converted number is valid

  // TODO Keep a tally of the number of params that are valid, which you can
  // later divide the sum by to compute the average.

  // TODO Return the sum divided by the number of valid params
  let valid = 0;
  let sum = 0;
  params.forEach((element) => {
    if (typeof(element) == 'string') {
      element = parseInt(element);
    }
    if (!isNaN(element)) {
      sum += element;
      valid++;
    }
  });
  return sum / valid;
}
