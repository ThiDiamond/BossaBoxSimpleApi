const express = require('express');
const routes = express.Router();
const ToolsController = require('./controllers/ToolsController');

//Tools routes
routes.get('/tools', ToolsController.index);
routes.get('/tools/:id', ToolsController.show);
routes.post('/tools', ToolsController.store);
routes.put('/tools/:id', ToolsController.update);
routes.delete('/tools/:id', ToolsController.destroy);

module.exports = routes;
