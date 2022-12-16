/**
 * Function should be bound to the DataService class. Modifies all dates to be
 * JavaScript date objects.
 */
export function convertDatasetDates() {
  /* eslint-disable-next-line no-invalid-this */
  this.data.forEach((item) => {
    item.disclosure_date = new Date(item.disclosure_date);
    item.transaction_date = new Date(item.transaction_date);
  });
}
