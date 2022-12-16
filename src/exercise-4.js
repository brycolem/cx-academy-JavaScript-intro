/**
 * Given an array of numbers, this function finds the maximum using
 * rescursion.
 *
 * @param {number[]} numbers list of numbers
 * @param {number} max number found so far
 * @return {number} max
 */
export function findMax(numbers, max) {
  if (isNaN(max)) {
    max = numbers[0];
  }
  if (numbers[0] > max) {
    max = numbers[0];
  }
  const newArray = numbers.slice(1);
  if (newArray.length > 0) {
    max = findMax(newArray, max);
  }
  return max;
}
