const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config.db');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Connect DB
        this.connectDB();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        //Cors
        this.app.use(cors());

        //Reading body
        this.app.use(express.json());

        //Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/users', require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('APP RUNNING PORT ', this.port);
        });
    }

}


module.exports = Server;