/**
 * Stores a list based on an array data structure
 */
export class List {
  /** Constructor instantiates `this.list` to an empty array */
  constructor() {
    this.list = [];
  }

  /**
   * Adds an item of schema {name: string} to the `this.list`
   * array.
   * @param {ListItem} item
   */
  addItem(item) {
    // TODO add an item to the list
    this.list.push(item);
  }

  /**
   * Finds an item in the `this.list` given a name
   * @param {string} name
   * @return {ListItem}
   */
  findByName(name) {
    // TODO Use Array.find to return an item with the given name
    return this.list.find((element) => name);
  }

  /**
   * Remove an item from `this.list` given a name
   * @param {string} name
   */
  removeByName(name) {
    // TODO Use Array.splice to remove an item with the given name from
    // `this.list`
    const indexOfElement = this.list.findIndex((element) => name);
    this.list.splice(indexOfElement, indexOfElement+1);
  }

  /**
   * Clears `this.list`
   */
  clearList() {
    this.list = [];
  }
}
