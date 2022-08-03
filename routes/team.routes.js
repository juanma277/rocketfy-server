const { Router } = require('express');
const { teamsAll } = require('../controllers/team.controller');

const router = Router();

router.get('/', teamsAll);

module.exports = router;