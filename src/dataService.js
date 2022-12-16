import {BaseDataService} from './baseDataService.js';
import {convertDatasetDates} from './convertDatasetDates.js';
import dataset from './dataset.js';

/**
 * DataService provides various methods to interact with the dataset
 */
export class DataService extends BaseDataService {
  /**
   * This constructor should
   * 1. Call the parent BaseDataService constructor
   * 2. Set this.tickerGroups using the data that was initialized
   *    in BaseDataService
   */
  constructor() {
    super();
    this.tickerGroups = this.data;
  }

  /**
   * Return the size of the dataset
   *
   * @return {number}
   */
  get size() {
    return this.data.length;
  }

  /**
   * Return an array of strings representing the "ticker" property from
   * each element of the dataset.
   *
   * @return {string[]}
   */
  get tickers() {
    return this.data.map((tic) => tic.ticker);
  }

  /**
   * Getter for the this._tickerGroups property.
   *
   * @return {TickerGroups}
   */
  get tickerGroups() {
    return this._tickerGroups;
  }

  /**
   * Setter for the _tickerGroups property, given the initial dataset.
   *
   * this._tickerGroups is an object in which the keys are distinct tickers
   * from the dataset and values are Sets consisting of the representatives
   * associated with the ticker. E.g.
   *
   * {
   *     ...
   *     FINX: Set(1) { 'Hon. Thomas Suozzi' },
   *     LPT: Set(1) { 'Hon. John Rutherford' },
   *     'JPM$G': Set(2) {
   *       'Hon. Neal Patrick MD, Facs Dunn',
   *       'Hon. Neal Patrick Dunn MD, FACS'
   *     },
   *     ...
   * }
   *
   * @param {DataRow[]} data
   */
  set tickerGroups(data) {
    this._tickerGroups = {};
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].ticker in this._tickerGroups) {
        this._tickerGroups[this.data[i].ticker]
            .add(this.data[i].representative);
      } else {
        this._tickerGroups[this.data[i].ticker] = new Set();
        this._tickerGroups[this.data[i].ticker]
            .add(this.data[i].representative);
      }
    }
  }

  /**
   * Filters the dataset to return rows matching the provided ticker symbol
   *
   * @param {string} ticker
   * @return {DataRow[]}
   */
  getRowsByTicker(ticker) {
    return this.data.filter((dataset) => {
      return dataset.ticker == ticker;
    });
  }

  /**
   * Return an object with `representative` values as keys and `amount` values
   * as values stored in an array. E.g.
   *
   * {
   *     "Hon. Virginia Foxx": ["$1,001 - $15,000", ...],
   *     ...
   * }
   *
   * @return {Object}
   */
  getRepAmountMap() {
    const temp = {};
    for (let i = 0; i < dataset.length; i++) {
      const key = dataset[i].representative;
      const val = dataset[i].amount;
      if (key in temp) {
        temp[key].push(val);
      } else {
        temp[key] = [val];
      }
    }
    return temp;
  }

  /**
   * Function accepts unlimited amount of search terms as input parameters. Each
   * term should filter the list of representatives to further narrow down
   * the search. The text search is case-insensitive.
   *
   * @param {...string} searchTerms
   * @return {DataRow[]}
   */
  searchForRep(...searchTerms) {
    let copyTerms = [...searchTerms];
    copyTerms = copyTerms.map( searchTerm => searchTerm.toLowerCase() );

    let searchResults = this.data.filter ( dataRow => dataRow.representative.toLowerCase().includes(copyTerms[0]));
    copyTerms.splice(0,1);

    while (copyTerms.length > 0) {
      searchResults = searchResults.filter( dataRow => dataRow.representative.toLowerCase().includes(copyTerms[0]))
      copyTerms.splice(0,1)

      if ( searchResults.length === 0) {
        break;
      }
    }

  return searchResults

  }

  /**
   * Return a Function that converts all dates of the dataset to JavaScript
   * date objects.
   *
   * Hint: Return the imported convertDatasetDates function bound
   * to this DataService object.
   *
   * @return {Function}
   */
  getConvertDateFn() {
    return convertDatasetDates.bind(this);
  }

  /**
   * Returns a random row from the dataset
   *
   * @return {DataRow}
   */
  getRandomRow() {
    return this.data[Math.floor(Math.random() * dataset.length)];
  }

  /**
   * Lookup a row by id and return a string summary for a row of data that
   * includes representative, ticker, type, and amount in the following form:
   *
   * "Rep: {representative}, Ticker: {ticker}, Type: {type}, Amount: {amount}"
   *
   *  Note: There should not be curly brackets in the result. The curly
   *  brackets are used in the above example only to denote fields of the
   *  dataset.
   *
   * @param {string} id
   * @return {string}
   */
  getSummaryById(id) {
    const data = this.data.find((iden) => {return iden.id === id;});
    const summary = `Rep: ${data.representative}, Ticker: ${data.ticker}, Type: ${data.type}, Amount: ${data.amount}`;
    return summary;
  }

  /**
   * Function accepts unlimited id parameters. All provided ids are removed
   * from the dataset. If any of the provided ids are not found, an error
   * is thrown.
   *
   * @param {...string} ids
   */
  removeById(...ids) {
    for(const i of ids){
      const remove = this.data.findIndex((rm) => rm.id == i);
      if(remove !== -1){
        this.data.splice(remove, 1);
      } else {
        throw new Error('not found')
      }
    }
  }

  /**
   * Returns the dataset sorted by a given property and sort direction. Sort
   * direction can either be 'asc' or 'desc'. Default sort is 'asc'.
   *
   * Note: This function does not modify this.data of the DataService object.
   * It instead returns a sorted copy.
   *
   * @param {string} property
   * @param {'asc' | 'desc'} sort
   * @return {DataRow[]}
   */
  sortByProperty(property, sort) {
    let deepCopy = this.getDatasetDeepCopy();
    if (sort == 'asc') {
      deepCopy.sort((a,b) => (a[property] > b[property] ? 1 : -1));
    } else {
      deepCopy.sort((a,b) => (a[property] > b[property] ? -1 : 1));
    }
    return deepCopy;
  }
}
