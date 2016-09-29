const elasticsearch = require('elasticsearch');


/** Class representing our elastic search connection. */
class ElSearch {

  /**
   * Create a connection.
   */
  constructor() {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200'
    });
  }

  /**
   * Given a number ms representing the number of miliseconds, test the connection.
   * @param {number} ms - A number representing then number of miliseconds to wait.
   * @return {undefined}
   */
  ping(ms=3000) {
    this.client.ping({
      requestTimeout: ms,
      hello: 'chicken'
    }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Everything worked!');
      }
    });
  }

  /**
   * @name insertItem
   * @desc Given an object item, insert the given item into elastic search.
   * @param {object} item - An object that has certain properties to insert.
   * @return {undefined} There is no defined return type.
   */
  insertItem(item) {
    console.log(item);
  }

  /**
   * Given a string id representing an item id, delete the item from elastic search.
   * @param {string} id - A string representing an item key.
   */
  getItem(id) {
    console.log(id);
  }

  /**
   * Given either a string q or a list of strings categories, perform a product search
   *   for the given items in our elastic search store.
   * @param {string} [q=undefined] - An optional string q representing an item 
   *   description.
   * @param {string[]} [categories=undefined] - An optional list of strings 
   *   representing specific categories to search for.
   */
  searchItems(q, categories) {
    console.log(q, categories);
  }

  /**
   * Given a string id representing an item id number, delete the given object from the 
   *   elastic search store.
   * @param {string} id - A string representing an object id.
   */
  deleteItem(id) {
    console.log(id);
  }

}

module.exports = new ElSearch();
