// This is importing the User model and the Sequelize library.
const db = require("../models");
const User = db.user;

const request = {};

// Retrieve all Users from the database.
request.getAllUsers = async (req, res) => {
    try {
        // Retrieving all the users from the database.
        let data = await User.findAll({
            attributes: ["id", "firstname", "lastname", "createdAt", "updatedAt"]
        });
        // Returning a JSON object with a status and data property.
        return res.status(200).json({ data })
    } catch (error) {
        // This is a catch block. It is used to catch errors that are thrown in the try block.
        res.status(500).json({ status: "error 500" });
        console.error(error);
    }
}

// Find a single User with an id
request.getOneUser = async (req, res) => {
    try {
        // This is a query to the database. It is using the Sequelize library to find a single user with the id that is passed in the request.
        let id = req.params.id;
        let data = await User.findOne({
            attributes: ["id", "firstname", "lastname", "createdAt", "updatedAt"],
            where: { id: id }
        });
        // Returning a JSON object with a status and data property.
        return res.status(200).json({ data })
    } catch (error) {
        // This is a catch block. It is used to catch errors that are thrown in the try block.
        res.status(500).json({ status: "error 500" });
        console.error(error);
    }
}

// Create and Save a new User
request.createUser = async (req, res) => {
    try {
        // This is a query to the database. It is using the Sequelize library to create a new user with the data that is passed in the request.
        let body = req.body;
        let data = await User.create({
            firstname: body.firstname,
            lastname: body.lastname
        });
        // Returning a JSON object with a status and data property.
        return res.status(201).json({ data });
    } catch (error) {
        // This is a catch block. It is used to catch errors that are thrown in the try block.
        res.status(500).json({ status: "error 500" });
        console.error(error);
    }
}

// Update a User by the id in the request
request.updateUser = async (req, res) => {
    try {
        // This is a query to the database. It is using the Sequelize library to update a user with the data that is passed in the request.
        let id = req.params.id;
        let body = req.body;
        let data = await User.update({
            firstname: body.firstname,
            lastname: body.lastname,
            updatedAt: new Date().toJSON()
        }, {
            where: { id: id }
        });
        // Returning a JSON object with a status and data property.
        return res.status(200).json({ data })
    } catch (error) {
        // This is a catch block. It is used to catch errors that are thrown in the try block.
        res.status(500).json({ status: "error 500" });
        console.error(error);
    }
}

// Delete a User with the specified id in the request
request.deleteUser = async (req, res) => {
    try {
        // This is a query to the database. It is using the Sequelize library to delete a user with the id that is passed in the request.
        let id = req.params.id;
        let data = await User.destroy({
            where: { id: id }
        });
        // Returning a JSON object with a status and data property.
        return res.status(204).json({ data })
    } catch (error) {
        // This is a catch block. It is used to catch errors that are thrown in the try block.
        res.status(500).json({ status: "error 500" });
        console.error(error);
    }
}

module.exports = request;