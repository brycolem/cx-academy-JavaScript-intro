import {findMax} from '../src/exercise-4';

test('should find the max', () => {
  expect(findMax([1, 324, 2, 3, 46, 4254, 3434, 343])).toBe(4254);
  expect(findMax([1])).toBe(1);
  expect(findMax([-2, -40, 0, -50, -2, -3])).toBe(0);
  expect(findMax([])).toBeUndefined();
});

