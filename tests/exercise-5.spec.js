import {findAverage} from '../src/exercise-5';

test('should find the average', () => {
  expect(findAverage(10, 10, 10, 10, '10', '10', '10')).toBe(10);
  expect(findAverage('5', 6, 'invalid', 7, undefined, 8, '9', 10, {}))
      .toBe(7.5);
});

