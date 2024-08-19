import express from 'express';
import _ from 'lodash';

const app = express();
const port = 3000;

const USERS = [{ id: 0, username: 'shinigami', password: '1234' }];
const QUESTIONS = [];
const SUBMISSIONS = [];

// Middlewares
app.use(express.json());

app.get('/', (req, res) => { });

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = { id: USERS.length, username, password };
    const errors = [];

    if (!username) {
        errors.push('Username is required');
    }

    if (!password) {
        errors.push('Password is required');
    }

    if (username && username.length < 3) {
        errors.push('Username must be at least 3 characters long');
    }

    if (password && password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }

    if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
    }

    if (USERS.some(item => item.username === user.username)) {
        res.status(400).send({ message: 'User already exists' });
    } else {
        USERS.push(user);
        res.status(201).send({ message: 'User created successfully' });
    }
});

app.post('/login', (req, res) => { });

app.get('/users', (req, res) => {
    let userList = _.cloneDeep(USERS);
    userList.map((item) => {
        delete item.password;
    });

    res.status(200).send(userList);
});

app.post('/submission', (req, res) => { });

app.get('/submissions', (req, res) => { });

app.get('/questions', (req, res) => { });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`);
});