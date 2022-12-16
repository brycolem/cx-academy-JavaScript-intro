import {getFirstName, getLastToFirstNameMapping} from '../src/exercise-3';

test('it should get the last-to-first-name mapping', () => {
  const mapping = getLastToFirstNameMapping();
  expect(mapping['Smith']).toBe('John');
  expect(mapping['Doe']).toBe('Jane');
  expect(mapping['Skywalker']).toBe('Luke');
});

test('it should get firstname, give lastname', () => {
  expect(getFirstName('Smith')).toBe('John');
  expect(getFirstName('Doe')).toBe('Jane');
  expect(getFirstName('Skywalker')).toBe('Luke');
});
