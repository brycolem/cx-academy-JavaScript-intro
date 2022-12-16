import {DataService} from '../src';
import * as crypto from 'crypto';
import {jest} from '@jest/globals';

let ds;

beforeEach(() => {
  ds = new DataService();
});

test('get size', async () => {
  const lengthCheck = crypto.createHash('md5')
      .update(String(ds.data.length)).digest('hex');
  const sizeCheck = crypto.createHash('md5')
      .update(String(ds.size)).digest('hex');
  expect(lengthCheck).toBe('c7876d6b0f9d5461fd3e87c0d1e51e12');
  expect(sizeCheck).toBe('c7876d6b0f9d5461fd3e87c0d1e51e12');
});

test('get tickers', () => {
  const bp = crypto.createHash('md5')
      .update(ds.tickers[0]).digest('hex');
  expect(bp).toBe('96d4cdff8ed57e93e3b3d843cffe3af7');
});

test('getRowsByTicker', () => {
  const bpCheck = crypto.createHash('md5')
      .update(JSON.stringify(ds.getRowsByTicker('BP'))).digest('hex');
  const xomCheck = crypto.createHash('md5')
      .update(JSON.stringify(ds.getRowsByTicker('XOM'))).digest('hex');
  const nullCheck = crypto.createHash('md5')
      .update(JSON.stringify(ds.getRowsByTicker('NULL'))).digest('hex');
  expect(bpCheck)
      .toBe('fd7e6efc080fdb1b789926136d849c73');
  expect(xomCheck)
      .toBe('dd1309fe9a4b908370c1d94db97c6004');
  expect(nullCheck)
      .toBe('d751713988987e9331980363e24189ce');
});

test('getRepAmountMap', () => {
  const repMap = ds.getRepAmountMap();
  const repCheck = crypto.createHash('md5')
      .update(JSON.stringify(repMap)).digest('hex');
  expect(repCheck).toBe('8ac5373f55c711c5cc4e5af8acdfdae7');
});

test('searchForRep', () => {
  const searchA = crypto.createHash('md5')
      .update(JSON.stringify(ds.searchForRep('h', 'a', 't').length))
      .digest('hex');
  const searchB = crypto.createHash('md5')
      .update(JSON.stringify(ds.searchForRep('hon.').length))
      .digest('hex');
  const searchC = crypto.createHash('md5')
      .update(JSON.stringify(ds.searchForRep('hon.', 'vir', 'fox').length))
      .digest('hex');
  expect(searchA).toBe('61f3a6dbc9120ea78ef75544826c814e');
  expect(searchB).toBe('777faedf322f9cda62e87a9a1db76d24');
  expect(searchC).toBe('5878a7ab84fb43402106c575658472fa');
});

test('getConvertDateFn', () => {
  ds.getConvertDateFn()();
  expect(ds.data[0].disclosure_date instanceof Date).toBe(true);
});

test('getSummaryById', () => {
  const summary = ds.getSummaryById('01793f76-9c14-4e00-8738-d328a01b7741');
  const actualHash = crypto.createHash('md5').update(summary).digest('hex');
  const expectedHash = 'a482841259922ab4f42f478324c1dba2';
  expect(actualHash).toBe(expectedHash);
});

test('removeById', () => {
  const count = ds.size;
  ds.removeById('6dd68da9-3171-4a30-884a-10a5c284b135');
  expect(ds.size).toBe(count - 1);
  ds.removeById(
      'ce473d41-e2f7-4345-869d-7363cb5d3d9f',
      '1e56ffee-b44e-46ac-9dcc-8fcbe38e7eb8',
      'a31ac609-22bd-4660-9c08-454a690c1faf',
  );
  expect(ds.size).toBe(count - 4);
  expect(() => ds.removeById('6dd68da9-3171-4a30-884a-10a5c284b135'))
      .toThrow(Error);
});

describe('sortByProperty', () => {
  test('should sort by provided property', () => {
    const sorted = ds.sortByProperty('ticker', 'desc');
    const expectedHash = '63cd176d30fcff6e353dc2ce65cd8e98';
    const tickerMap = sorted.map((i) => i.ticker);
    const actualHash = crypto.createHash('md5')
        .update(JSON.stringify(tickerMap)).digest('hex');
    expect(actualHash).toBe(expectedHash);
  });
  test('should not modify DataService\'s data array', () => {
    ds.sortByProperty('ticker');
    const unexpectedHash = '2a548ba4a245f2ce1db9919ff27333ce';
    const tickerMap = ds.data.map((i) => i.ticker);
    const actualHash = crypto.createHash('md5')
        .update(JSON.stringify(tickerMap)).digest('hex');
    expect(actualHash).not.toBe(unexpectedHash);
  });
});

test('dataset is cloned in the DataService constructor', () => {
  const dsA = new DataService();
  dsA.data[0].testProp = 1;
  const dsB = new DataService();
  expect(dsB.data[0].testProp).toBeUndefined();
});

test('getRandomRow', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.2341234);
  expect(ds.getRandomRow().id).toBe('000ec124-6ae4-4125-9cce-5e36aba638c9');
  jest.spyOn(global.Math, 'random').mockRestore();
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5913498);
  expect(ds.getRandomRow().id).toBe('96cf5950-b82f-4505-899c-7c5e82727cb2');
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('tickerGroups', () => {
  const tgCheck = crypto.createHash('md5')
      .update(JSON.stringify(ds.tickerGroups)).digest('hex');
  expect(tgCheck).toBe('9efd84d96885bf7f79f8b5742b9c49c8');
});
