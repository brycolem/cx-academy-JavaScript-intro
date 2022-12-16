const people = [
  {firstname: 'John', lastname: 'Smith'},
  {firstname: 'Jane', lastname: 'Doe'},
  {firstname: 'Luke', lastname: 'Skywalker'},
];

/**
 * Returns an object such that the keys are the `lastname` values
 * from the `people` elements and the values are the respective
 * firstnames.
 *
 * E.g. { 'Smith': 'John', ... }
 *
 * @return {object}
 */
export function getLastToFirstNameMapping() {
  const obj = {};
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    obj[person.lastname] = person.firstname;
  }
  return obj;
}

/**
 * Uses the above `getLastToFirstNameMapping` function to return
 * the respective firstname of a person in the `people` array.
 *
 * @param {string} lastname of a person
 * @return {string} firstname
 */
export function getFirstName(lastname) {
  return getLastToFirstNameMapping()[lastname];
}
