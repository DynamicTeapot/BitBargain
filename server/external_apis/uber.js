const rush = require('uber-rush');

const rushClient = rush.createClient({
  client_secret: process.env.rushSecret,
  client_id: process.env.rushId,
  sandbox: true // keep us in the test environment
});

// Expects item = {title: STRING, quantity: NUM, is_fragile: BOOL}
// address = {address: STRING, city: STRING, state: STRING, postal_code:
// STRING, country_code: STRING }
// contact = {first_name: STRING, last_name: STRING}
// from/to = {address, contact}
// Returns an array of RUSH quote objects
function deliveryQuote(item, from, to) {
  const newDel = rushClient.createDelivery({
    item,
    dropOff: {
      contact: to.contact,
      location: to.address
    },
    pickUp: {
      contact: from.contact,
      location: from.address
    }
  });
  return newDel.quote();
}

// Accepts a delivery object, subscribes to updates
// and confirms the delivery
function confirmDelivery(delivery, statusCb, locationCb) {
  delivery.on('status', (status) => {
    statusCb(status);
  })
  .on('location', (location) => {
    locationCb(location);
  });
}

exports.deliveryQuote = deliveryQuote;
exports.confirmDelivery = confirmDelivery;
