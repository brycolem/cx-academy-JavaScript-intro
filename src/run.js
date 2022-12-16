import {DataService} from './dataService.js';

/**
 * Instantiate a DataService and call its various functions.
 */
(function run() {
  const ds = new DataService();
  const totalSize = ds.size;
  const firstTicker = ds.tickers[0];
  const summary = ds.getSummaryById(ds.data[999].id);
  console.log({totalSize});
  console.log({firstTicker});
  console.log({summary});
})();
