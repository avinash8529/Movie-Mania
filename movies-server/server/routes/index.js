const express = require('express');

const router = express.Router();

const pingRoutes = require('./ping');
const healthCheckRoutes = require('./health-check');
const apiSpecRoutes = require('./api-spec');
const movieRoutes = require('./movie');

pingRoutes(router);
healthCheckRoutes(router);
apiSpecRoutes(router);
movieRoutes(router);

module.exports = router;
