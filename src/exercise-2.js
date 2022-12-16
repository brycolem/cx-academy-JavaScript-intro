/**
 * The data parameter can be either a number or an object with a `price` key.
 * E.g. { price: 100 }
 *
 * This function checks if data is a number, and if so returns the number + 1.
 *
 * If instead thedata is an object, modify the value of the `price` key so that
 * it is data.price + 1 and do not return anything.
 *
 * @param {number|object} data
 * @return {number|undefined}
 */
export function addDollarToPrice(data) {
  if (!isNaN(data)) {
    return data + 1;
  } else {
    data.price = data.price + 1;
  }
}
