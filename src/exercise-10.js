/**
 * Adds a property `random` to a given object with a random value
 * >= 1 and <= 10.
 *
 * TODO Return the modified object WITHOUT modifying
 * the original input object. (You will need to shallow-clone the object)
 *
 * @param {object} obj
 * @return {object}
 */
export function addRandomProperty(obj) {
  const copy = Object.assign({}, obj);
  copy.random = Math.ceil(Math.random() * 10 ) + 1;
  return copy;
}

/**
 * Given an object with the `random` property defined, returns
 * a string of format "The random number is {number}"
 *
 * If the object has a `name` property, convert the name to
 * uppercase and return "The random number for {name} is {number}"
 *
 * @param {object} obj
 * @return {string}
 */
export function getRandomText(obj) {
  if ('name' in obj) {
    return `The random number for ${obj.name.toUpperCase()} is ${obj.random}`;
  } else {
    return `The random number is ${obj.random}`;
  }
}
