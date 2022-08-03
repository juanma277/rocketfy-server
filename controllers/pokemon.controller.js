const axios = require('axios');
const pokemonApi = axios.create();

const getAllPokemon = async(req, res) => {
    const { limit = 10 } = req.query;
    try {
        let pokemons = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        res.json(pokemons.data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

const getByIdPokemon = async(req, res) => {
    const { id } = req.params;
    try {
        let pokemons = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        res.json(pokemons.data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

module.exports = {
    getAllPokemon,
    getByIdPokemon
}