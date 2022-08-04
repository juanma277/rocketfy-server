const { Schema, model } = require('mongoose');

const ShippingSchema = Schema({
    shipping_order_id: {
        type: Schema.Types.ObjectId,
        ref: 'ShippingOrder',
        require: [true, 'Shipping order is required']
    },
    status: {
        type: String,
        require: [true, 'Status is required']
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Shipping', ShippingSchema);