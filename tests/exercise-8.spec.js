import {Circle, Shape} from '../src/exercise-8';

test('it should call super', () => {
  const circle = new Circle('blue', 2);
  expect(circle.color).toBe('blue');
  expect(circle instanceof Shape).toBe(true);
});

test('it should compute the area', () => {
  const circle = new Circle('blue', 2);
  expect(circle.area().toFixed(3)).toBe('12.566');
});
