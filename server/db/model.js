const db = require('./config');

module.exports = {
    // all methods return a promise
    // getters resolve with -> [{...}, {...}, ...]
    // create methods can take an array of objects -> [{data}, {...}, ...]
  items: {
    getAll() {
      return db.select().from('items')
      .catch(err => console.error(`Error fetching data from "items" table ${err}`));
    },
    getAllCategories() {
      return db('items').distinct('category').select('category')
      .catch(err => console.error(`Error getting categories ${err}`));
    },
    getByTitle(title) {
      return db('items').where('title', title)
      .catch(err => console.error(`Error getting item by title ${err}`));
    },
    // Experimental
    getByCategory(category) {
      return db('items').where('category', category)
      .catch(err => console.error(`Error getting item by category ${err}`));
    },
    getById(id) {
      return db('items').where('id', id)
      .catch(err => console.error(`Error getting item by id ${err}`));
    },
      // expects data to be formatted as {title: '', category: '', etc...}
      // can take an array of data objects -> [{...}, {...}, ...]
      // resolves promise with id of first inserted record -> [id]
    create(data) {
      return db('items').insert(data, 'id')
      .catch(err => console.error(`Error inserting into "items" table ${err}`));
    },
    // takes an item id and updates/toggles the sold field
    sold(id) {
      return db('items').where('id', id)
      .update('sold', 'true');
    }
  },
  users: {
    getAll() {
      return db.select().from('users')
      .catch(err => console.error(`Error getting all users ${err}`));
    },
    getByName(username) {
      return db('users').where('username', username)
      .catch(err => console.error(`Error getting user by username ${err}`));
    },
    getByEmail(email) {
      return db('users').where('email', email)
      .catch(err => console.error(`Error getting user by email ${err}`));
    },
    // takes an object -> {username: '', email: ''} and creates a new user
    // can accept an array of objects
    // returns promise that resolves with id of first newly made user
    create(user) {
      return db('users').insert(user, 'id');
    },
    updateUser(email, props) {
      return db('users').where('email', email).update(props);
    }
  },
  transactions: {
    getAll() {
      return db.select().from('transactions')
      .catch(err => console.error(`Error getting all transactions ${err}`));
    },
    getById(id) {
      return db('transactions').where('item_id', id);
    },
    getAllDisputes() {
      return db('transactions').where('order_status', 'disputed');
    },
    // data = {item_id: item id(num), buyer_id: user id(num), seller_id: user id(num)}
    // can take an array of data objects -> [{...}, {...}, ...]
    // resolves promise by returning the id of the first newly created record
    create(data) {
      return db('transactions').insert(data, 'id')
      .catch(err => console.error(`Error inserting into transactions table ${err}`));
    },
    updateTransaction(id, props) {
      return db('transactions').where('id', id).update(props);
    }
  },
  images: {
    getById(itemId, picId) {
      if (picId !== undefined) {
        return db('images').where('item_id', itemId).andWhere('pic_id', picId);
      }
      return db('images').where('item_id', itemId);
    },
    createImage(itemId, s3Url) {
      // First we check to see if there are images for this account.
      return db('images').where('item_id', itemId).then(images => images.length)
        .then((len) => {
          const length = (len === undefined ? 1 : len + 1);
          return db('images').insert({
            item_id: itemId,
            pic_id: length,
            url: s3Url
          });
        });
    },
    createImages(itemId, s3Urls) {
      // First we check to see if there are images for this account.
      return db('images').where('item_id', itemId).then(images => images.length)
        .then((len) => {
          let length = (len === undefined ? 1 : len + 1);
          s3Urls.forEach((s3Url) => {
            db('images').insert({
              item_id: itemId,
              pic_id: length,
              url: s3Url
            });
            length += 1;
          });
        });
    }
  }
};
