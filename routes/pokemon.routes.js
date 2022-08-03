const { Router } = require('express');
const { getAllPokemon, getByIdPokemon } = require('../controllers/pokemon.controller');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/getall', validateJWT, getAllPokemon);
router.get('/getByid/:id', validateJWT, getByIdPokemon);

module.exports = router;