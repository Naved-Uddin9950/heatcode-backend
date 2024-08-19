// packages
import express from 'express';
import _ from 'lodash';
import cookieParser from 'cookie-parser';

// constants
import { app, PORT } from './constants.js';

// controllers
import { Login, Signup } from './Controllers/Auth/index.js';
import { AddQuestions, GetQuestions, ListQuestions } from './Controllers/Questions/index.js';

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
app.get('/questions/:id', GetQuestions);

// Server startup
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`);
});