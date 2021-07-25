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
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      min: 0.99
    },
    image: {
      type: String
    }
  }]
});

const Order = model('Order', orderSchema);

module.exports = Order;
