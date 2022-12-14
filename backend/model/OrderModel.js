const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
}, {
    collection: 'order'
});

module.exports = mongoose.model('Order', orderSchema)