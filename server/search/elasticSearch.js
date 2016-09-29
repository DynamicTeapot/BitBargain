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
}

module.exports = new ElSearch();
