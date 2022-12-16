/**
 * Counts each type of element in an array.
 *
 * Possible types include: 'S', 'A', 'B', 'C', 'D', and 'F'
 * Example Type[] that could be supplied:
 * [
 *  { type: 'S' },
 *  { type: 'D' },
 *  { type: 'F' },
 *  { type: 'A' },
 *  { type: 'A' },
 * ]
 * The above would result in a count object returned like:
 * {
 *  A: 2,
 *  D: 1,
 *  F: 1,
 *  S: 1,
 * }
 *
 * @param {Type[]} types to count
 * @return {object} counts
 */
export function getTypeCount(types) {
  const obj = {};
  types.forEach((element) => {
    const char = element.type;
    if (char in obj) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  });
  return obj;
}
