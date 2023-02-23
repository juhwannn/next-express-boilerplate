require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV;
const port = process.env.SERVER_PORT || 3000;
const dev = NODE_ENV !== 'staging' && NODE_ENV !== 'production';

const nextJsEnabled = true;

const express = require('express');

const Next = require('next');
const nextJs = Next({dev});
const nextJsRequestHandler = nextJs.getRequestHandler();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

(async () => {
    try {
        if (nextJsEnabled) await nextJs.prepare();
        const expressServer = express();

        expressServer.set('trust proxy', true);
        expressServer.use('/api', require('./serverSides/routes/api'));

        const options = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: `next-express-boilerplate`,
                    version: '1.0.0',
                },
            },
            apis: ['./serverSides/routes/api/*.js'],
        };

        const swaggerUiOptions = {
            explorer: true,
        };

        const openapiSpecification = swaggerJsdoc(options);
        expressServer.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification, swaggerUiOptions));

        if (nextJsEnabled) expressServer.get('*', (req, res) => {
            return nextJsRequestHandler(req, res);
        });

        expressServer.listen(port, (err) => {
            if (err) {
                throw err;
            }

            console.info(`http://localhost:${port}`);
        });
    } catch (ex) {
        console.error(ex.stack);
        process.exit(1);
    }
})();
