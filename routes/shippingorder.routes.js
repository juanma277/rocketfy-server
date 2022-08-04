const { Router } = require('express');
const { check } = require('express-validator');

const { shippingOrderPost } = require('../controllers/shippingorder.controller');

const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/', [
    check('total_amount', 'Total amount is required').not().isEmpty(),
    validateFields
], shippingOrderPost);

module.exports = router;