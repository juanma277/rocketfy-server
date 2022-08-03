const { Router } = require('express');
const { check } = require('express-validator');

const { usersPost } = require('../controllers/user.controller');

const { isTeamValid, isNickNameValid } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('nickname', 'Nickname is required').not().isEmpty(),
    check('nickname').custom(isNickNameValid),
    check('team').custom(isTeamValid),
    validateFields
], usersPost);

module.exports = router;