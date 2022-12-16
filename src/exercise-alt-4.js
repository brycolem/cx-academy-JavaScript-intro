/**
 * Given an array of numbers, this function finds the maximum using
 * rescursion.
 *
 * @param {number[]} numbers list of numbers
 * @param {number} max number found so far
 * @return {number} max
 */
export function findMax(numbers, max) {
  let newMax = max;
  if (typeof newMax === 'undefined' || numbers[0] > newMax) {
    newMax = numbers[0];
  }
  const rest = numbers.slice(1);
  return !rest.length ? newMax : findMax(rest, newMax);
  // TODO Uses Array.slice to create a new array containing elements from
  // `numbers` index 1 to n (not including the first element.)

  // TODO If the new array has length > 0, call `findMax` again using the
  // new array as the first argument and the current `max` as the
  // second argument
}


console.log(findMax([]));
