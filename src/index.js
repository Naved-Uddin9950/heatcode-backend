// packages
import express from 'express';
import _ from 'lodash';
import cookieParser from 'cookie-parser';

// database and constants
import { USERS } from './Database/Users.db.js';
import { app, PORT } from './constants.js';

// controllers
import { Login, Signup } from './Controllers/Auth/index.js';
import { AddQuestions, ListQuestions } from './Controllers/Questions/index.js';

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Home Routes
app.get('/', (req, res) => { });

// Auth Routes
app.post('/register', Signup);
app.post('/login', Login);

// Submissions Routes
app.post('/submission', (req, res) => { });
app.get('/submissions', (req, res) => { });

// Questions Routes
app.post('/questions', AddQuestions);
app.get('/questions', ListQuestions);
app.get('/questions/:id', (req, res) => { });

// Server startup
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`);
});