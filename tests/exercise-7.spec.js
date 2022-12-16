import {jest} from '@jest/globals';
import {findBirdByID} from '../src/exercise-7';

test('should continue and break', () => {
  let count = 0;
  jest.spyOn(global.console, 'log').mockImplementation(() => {
    count++;
  });
  findBirdByID('4');
  expect(count).toBe(3);
  count = 0;
  findBirdByID('8');
  expect(count).toBe(7);
});

test('it finds the right bird', () => {
  let lastBird = '';
  jest.spyOn(global.console, 'log').mockImplementation((bird) => {
    lastBird = bird;
  });
  const bird = findBirdByID('5');
  expect(bird.name).toBe('Eagle');
  expect(lastBird).toBe('Egret');
});

test('it returns undefined if the bird isn\'t found', () => {
  let lastBird = '';
  jest.spyOn(global.console, 'log').mockImplementation((bird) => {
    lastBird = bird;
  });
  const bird = findBirdByID('20');
  expect(bird).toBeUndefined();
  expect(lastBird).toBe('Ostrich');
});
