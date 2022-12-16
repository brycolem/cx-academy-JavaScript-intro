/**
 * Counts the number of non-nested property values that
 * match a given type.
 * @param {object} obj to count field types of
 * @param {string} type to count
 * @return {number} count
 */
export function countPropertyTypes(obj, type) {
  let count = 0;
  for (const property in obj) {
    if (typeof(obj[property]) == type) {
      count++;
    }
  }
  return count;
}
