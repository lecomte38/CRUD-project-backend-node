// Importing the usersController.js file.
const express = require('express');
const usersController = require("../controllers/usersController");

// This is the route file for the users.
exports.router = (function() {

    // Creating a new router object.
    let apiRouter = express.Router();

    //Users route
    apiRouter.route('/users').get(usersController.getAllUsers);
    apiRouter.route('/users/:id').get(usersController.getOneUser);
    apiRouter.route('/create_users').post(usersController.createUser);
    apiRouter.route('/update_users/:id').put(usersController.updateUser);
    apiRouter.route('/delete_users/:id').delete(usersController.deleteUser);

    // Returning the route object.
    return apiRouter;

})();