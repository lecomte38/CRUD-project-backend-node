// Importing the supertest and index.js files.
const request = require('supertest');
const app = require('../index');

let elementId;

// Tests

// Create new user
describe('Test : Create new user', function () {
    it('* JSON response - status : 201', function (done) {
        request(app)
            .post('/api/create_users')
            .send({ firstname: 'Jhon', lastname: 'Doe' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done)
    });
});

// Get all users
describe('Test : Get all users', function () {
    it('* JSON response - status : 200', function (done) {
        request(app)
            .get('/api/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Get one user
describe('Test : Get one user', function () {
    it('* JSON response - status : 200', function (done) {
        request(app)
            .get('/api/users/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
});

// Update an user
describe('Test : Update an user', function () {
    it('* JSON response - status : 202', function (done) {
        request(app)
            .put('/api/update_users/2')
            .send({ firstname: 'Jhon', lastname: 'Smith' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Delete an user
describe('Test : Delete an user', function () {
    it('* JSON response - status : 204', function (done) {
        request(app)
            .delete('/api/delete_users/2')
            .set('Accept', 'application/json')
            .expect(204, done);
    });
});