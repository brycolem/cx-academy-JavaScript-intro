import {addDollarToPrice} from '../src/exercise-2';

test('it should add a 1 to a number', () => {
  expect(addDollarToPrice(3)).toBe(4);
});

test('it should add a 1 to object.price', () => {
  const obj = {price: 100};
  const result = addDollarToPrice(obj);
  expect(obj.price).toBe(101);
  expect(result).toBeUndefined();
});
