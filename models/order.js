const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    order_number: {
        type: 'Number',
        required: true
    },
    menu_selection: {
        type:'String',
        required: true
    },
    order_name: {
        type:'String',
        required: true
    }
});

const custOrder = mongoose.model('orders', orderSchema);

module.exports = custOrder;