import { USERS } from '../../Database/Users.db.js';

export const Signup = (req, res) => {
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
};