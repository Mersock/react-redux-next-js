const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const port = parseInt(process.env.PORT, 10) || 3301;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.use(cookieParser());

        server.use(cors())
        server.options('*', cors())

        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3301');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
            next();
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });