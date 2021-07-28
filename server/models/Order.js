const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  restaurant:
  {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

const Order = model('Order', orderSchema);

module.exports = Order;
