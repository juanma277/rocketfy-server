const { Router } = require('express');
const { check } = require('express-validator');

const { shippingPost, shippingGet } = require('../controllers/shipping.controller');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/', [
    check('shipping_order_id', 'Order ID is required').not().isEmpty(),
    check('shipping_order_id', 'Order ID not valid').isMongoId(),
    check('status', 'Status is required').isIn(['pending', 'transit', 'sent']),
    validateFields
], shippingPost);

router.get('/', shippingGet)

module.exports = router;