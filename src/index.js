import express from 'express';
import _ from 'lodash';
import { USERS } from './Database/Users.db.js';
import { Login, Signup } from './Controllers/Auth/index.js';
import { app, PORT } from './constants.js';
import cookieParser from 'cookie-parser';

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Home Routes
app.get('/', (req, res) => { });

// Auth Routes
app.post('/register', Signup);
app.post('/login', Login);
app.get('/users', (req, res) => {
    let userList = _.cloneDeep(USERS);
    userList.map((item) => {
        delete item.password;
    });

    res.status(200).send(userList);
});

// Submissions Routes
app.post('/submission', (req, res) => { });
app.get('/submissions', (req, res) => { });

// Questions Routes
app.get('/questions', (req, res) => { });

// Server startup
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`);
});