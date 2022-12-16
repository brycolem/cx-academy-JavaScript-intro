import {countPropertyTypes} from '../src/exercise-9';

const obj = {
  a: 1,
  b: '1',
  c: 'hello',
  d: {
    a: '1',
    b: 20,
  },
  e: [],
  f: 'world',
};

test('it should count strings', () => {
  expect(countPropertyTypes(obj, 'string')).toBe(3);
  expect(countPropertyTypes(obj, 'object')).toBe(2);
  expect(countPropertyTypes(obj, 'number')).toBe(1);
});
