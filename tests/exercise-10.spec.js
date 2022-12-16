import {jest} from '@jest/globals';
import {addRandomProperty, getRandomText} from '../src/exercise-10';

test('it should add the random property', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.3);
  const ob = {name: 'test'};
  const newObject = addRandomProperty(ob);
  expect(newObject.random).toBe(4);
});

test('it should get the random text', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.4);
  const ob = {name: 'test'};
  const newObject = addRandomProperty(ob);
  expect(getRandomText(newObject)).toBe('The random number for TEST is 5');
  expect(getRandomText({random: 3})).toBe('The random number is 3');
});
