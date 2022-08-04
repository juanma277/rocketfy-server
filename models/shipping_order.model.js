const { Schema, model } = require('mongoose');

const ShippingOrderSchema = Schema({
    total_amount: {
        type: Number,
        require: [true, 'Total amount is required']
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('ShippingOrder', ShippingOrderSchema);