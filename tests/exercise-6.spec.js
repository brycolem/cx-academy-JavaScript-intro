import {getTypeCount} from '../src/exercise-6';

test('should get counts', () => {
  const types = [
    {type: 'S'}, {type: 'S'}, {type: 'S'},
    {type: 'S'}, {type: 'S'}, {type: 'S'},
    {type: 'A'}, {type: 'A'}, {type: 'S'},
    {type: 'B'}, {type: 'B'}, {type: 'B'},
    {type: 'B'}, {type: 'B'}, {type: 'B'},
    {type: 'C'}, {type: 'C'}, {type: 'C'},
    {type: 'B'}, {type: 'C'}, {type: 'D'},
    {type: 'D'}, {type: 'B'}, {type: 'C'},
    {type: 'F'}, {type: 'D'}, {type: 'D'},
    {type: 'S'}, {type: 'S'}, {type: 'S'},
    {type: 'S'}, {type: 'S'}, {type: 'S'},
    {type: 'A'}, {type: 'A'}, {type: 'S'},
    {type: 'B'}, {type: 'B'}, {type: 'B'},
    {type: 'B'}, {type: 'B'}, {type: 'B'},
    {type: 'C'}, {type: 'C'}, {type: 'C'},
    {type: 'B'}, {type: 'C'}, {type: 'D'},
    {type: 'D'}, {type: 'B'}, {type: 'C'},
    {type: 'F'}, {type: 'D'}, {type: 'D'},
  ];
  const counts = getTypeCount(types);
  expect(counts['S']).toBe(14);
  expect(counts['A']).toBe(4);
  expect(counts['B']).toBe(16);
  expect(counts['C']).toBe(10);
  expect(counts['D']).toBe(8);
  expect(counts['F']).toBe(2);
});

