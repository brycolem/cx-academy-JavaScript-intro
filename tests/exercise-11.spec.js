import {List} from '../src/exercise-11';

test('it should add items', () => {
  const list = new List();
  list.addItem({name: 'test'});
  expect(list.list.length).toBe(1);
  expect(list.list[0].name).toBe('test');
});

test('it should find items', () => {
  const list = new List();
  list.addItem({name: 'test'});
  expect(list.findByName('test').name).toBe('test');
});

test('it should remove items', () => {
  const list = new List();
  list.addItem({name: 'test'});
  expect(list.list.length).toBe(1);
  list.removeByName('test');
  expect(list.list.length).toBe(0);
});

test('it should clear the list', () => {
  const list = new List();
  list.addItem({name: 'test1'});
  list.addItem({name: 'test2'});
  list.addItem({name: 'test3'});
  expect(list.list.length).toBe(3);
  list.clearList();
  expect(list.list.length).toBe(0);
});
