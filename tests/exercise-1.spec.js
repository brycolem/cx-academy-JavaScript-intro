import {logHelloWorld} from '../src/exercise-1';
import {jest} from '@jest/globals';

test('it should log "Hello World"', () => {
  let value = '';
  jest.spyOn(global.console, 'log').mockImplementation((val) => {
    value = val;
  });
  logHelloWorld();
  expect(value).toBe('Hello World');
});
