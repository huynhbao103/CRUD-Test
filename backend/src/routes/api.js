const express = require('express');
const {getUsersAPI,postCreatUserAPI,putUpdateUser} = require('../controllers/apiControllers')

const routerAPI = express.Router();

// Route for the home page

routerAPI.get('/users',getUsersAPI);

routerAPI.post('/users',postCreatUserAPI);
routerAPI.put('/users',putUpdateUser);
module.exports = routerAPI;
