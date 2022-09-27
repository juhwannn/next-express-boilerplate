console.log(`${__filename}:1`);

const express = require('express');
const router = express.Router();

router.use('/test', require('./test'));

module.exports = router;
