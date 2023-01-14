// This is importing the express module and the usersRoute module.
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const apiRouter = require('./routes/usersRoute').router;
const bodyParser = require('body-parser');

// This is a middleware that is parsing the body of the request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This is a middleware that is parsing the body of the request.
app.use("/api", apiRouter);

// This is a function that is listening to the port 3000.
app.listen(3000, () => {
    console.log('Success running - Port 3000');
});

// This is exporting the app variable so that it can be used in other files.
module.exports = app;