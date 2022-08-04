const Shipping = require('../models/shipping.model');
const ShippingOrder = require('../models/shipping_order.model');

const shippingPost = async(req, res) => {
    try {
        const { shipping_order_id, status } = req.body;
        const shipping = new Shipping({ shipping_order_id, status });
        await shipping.save();
        res.json(shipping);
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

const shippingGet = async(req, res) => {
    try {
        const shippings = await Shipping.aggregate([
            { $group: { _id: '$status', count: { $sum: 1 } } },
            { $lookup: { from: "shippingorder", localField: "total_amount", foreignField: "_id", as: "total_amount" } }
        ]);
        res.json(shippings);
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

module.exports = {
    shippingPost,
    shippingGet
}