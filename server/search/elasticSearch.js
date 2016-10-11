const elasticsearch = require('elasticsearch');


/**
 * Some helpful links for this class:
 * https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html
 */


/** Class representing our elastic search connection. */
class ElSearch {

  /**
   * Create a connection.
   */
  constructor() {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200'
    });
    this.index = 'items';
  }

  /**
   * Perform the initial elastic search setup. Note that this is not the same as constructor.
   *   The constructor is meant to initialize the connection to the elastic search instance.
   *   This is for the initializing all of the indicies of the elastic search instance. So
   *   it should only be ran once for a given elastic search instance ever.
   */
  _init() {
    this.client.indices.create({
      index: this.index
    })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  /**
   * Close the current connection.
   */
  close() {
    this.client.close();
  }

  /**
   * Given a number ms representing the number of miliseconds, test the connection.
   * @param {number} ms - A number representing then number of miliseconds to timeout.
   * @return {Promise<boolean>} Returns a promise that resolves to 'true' if a response was
   *   received, otherwise returns false.
   */
  ping(ms = 3000) {
    return this.client.ping({
      requestTimeout: ms,
      hello: 'chicken'
    });
  }

  /**
   * @name insertItem
   * @desc Given an object item, insert the given item into elastic search.
   * @param {object} item - An object that has certain properties to insert.
   * @return {Promise<object>} Returns false if the object does not meet criteria.
   */
  insertItem(item) {
    return this.client.index({
      index: this.index,
      id: item.id,
      type: 'ALL',
      body: item
    });
  }

  /**
   * Given a string id representing an item id, delete the item from elastic search.
   * @param {string} id - A string representing an item key.
   */
  getItem(id) {
    return this.client.search({
      index: this.index,
      type: 'ALL',
      q: `id:${id}`
    });
  }

  /**
   * Given either a string q or a list of strings categories, perform a product search
   *   for the given items in our elastic search store.
   * @param {string} [q=undefined] - An optional string q representing an item
   *   description.
   * @param {string[]} [categories=undefined] - An optional list of strings
   *   representing specific categories to search for.
   * @return {Promise<JSON>} Returns a JSON object as a result.
   */
  searchItems(searchQ) {
    // const cat = categories || 'ALL';

    return this.client.search({
      index: this.index,
      type: 'ALL',
      body: {
        'query': {
          'bool': {
            'should': [
              { 'match': { 'title':  searchQ }},
              { 'match': { 'description': searchQ }}
            ]
          }
        }
      }
    }).then(res => res.hits.hits);
  }

  /**
   * Given a string id representing an item id number, delete the given object from the
   *   elastic search store.
   * @param {string} id - A string representing an object id.
   * @param {string} type - A string representing an object id.
   * @return {Promise<JSON>} Returns a JSON object as a result.
   */
  deleteItem(itemId) {
    return this.client.delete({
      index: this.index,
      type: 'ALL',
      id: itemId
    });
  }
}


module.exports = new ElSearch();
