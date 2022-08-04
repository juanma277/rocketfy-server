const Shippingorder = require('../models/shipping_order.model');

const shippingOrderPost = async(req, res) => {
    try {
        const { total_amount } = req.body;
        const shippingOrder = new Shippingorder({ total_amount });
        await shippingOrder.save();
        res.json(shippingOrder);
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

module.exports = {
    shippingOrderPost
}