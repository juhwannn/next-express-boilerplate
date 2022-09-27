require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV;
const port = 3000;
const dev = NODE_ENV !== 'staging' && NODE_ENV !== 'production';

const nextJsEnabled = true;

const express = require('express');

const Next = require('next');
const nextJs = Next({dev});
const nextJsRequestHandler = nextJs.getRequestHandler();


(async () => {
    try {
        if (nextJsEnabled) await nextJs.prepare();
        const expressServer = express();

        expressServer.set('trust proxy', true);
        expressServer.use('/api', require('./serverSides/routes/api'));

        if (nextJsEnabled) expressServer.get('*', (req, res) => {
            return nextJsRequestHandler(req, res);
        });

        expressServer.listen(port, (err) => {
            if (err)
                throw err;

            console.info(`http://localhost:${port}`);
        });
    } catch (ex) {
        console.error(ex.stack);
        process.exit(1);
    }
})();
