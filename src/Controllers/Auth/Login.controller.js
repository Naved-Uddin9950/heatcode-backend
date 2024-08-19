import { USERS } from '../../Database/Users.db.js';
import { useToken } from '../../utils/useToken.js';

export const Login = (req, res) => {
    const { username, password } = req.body;
    const isLogin = USERS.find(user => user.username === username && user.password === password);
    const { token, getToken } = useToken(req);

    if (isLogin) {
        res.cookie('heatcodeAuthToken', token, {
            maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days in milliseconds
            httpOnly: true // Optional: helps prevent XSS attacks
        });

        res.status(200).send({
            message: 'You have successfully logged in !',
            _token: token,
            cookie: getToken
        });
    } else {
        res.status(401).send({ error: 'Incorect username or password' });
    }
}