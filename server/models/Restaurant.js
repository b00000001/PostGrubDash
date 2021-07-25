const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
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

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
