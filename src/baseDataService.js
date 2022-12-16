import dataset from './dataset.js';

/**
 * Base DataService class responsible for loading dataset
 */
export class BaseDataService {
  /**
   * Constructor copies dataset to the "data" property using the
   * getDatasetDeepCopy function.
   */
  constructor() {
    this.data = this.getDatasetDeepCopy()
  }

  /**
   * Returns a deep copy of the dataset array. The dataset array, as well ask
   * all elements within it, are cloned.
   *
   * Modifying anything in the copy will not affect the original
   * dataset array.
   *
   * @return {DataRow[]}
   */
  getDatasetDeepCopy() {
    return dataset.map((obj) => Object.assign({}, obj));
  }
}
