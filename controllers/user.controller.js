const usersGet = (req, res) => {
    const { limit = 10 } = req.query;
    res.json({
        msg: 'GET - CONTROLLER',
        limit
    });
}
const usersPost = (req, res) => {
    const { name, password, nickname, team, last_connection } = req.body;
    res.json({
        msg: 'POST - CONTROLLER',
        name,
        password,
        nickname,
        team,
        last_connection
    });
}
const usersPut = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'PUT - CONTROLLER',
        id
    });
}
const usersDelete = (req, res) => {
    res.json({
        msg: 'DELETE - CONTROLLER'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}