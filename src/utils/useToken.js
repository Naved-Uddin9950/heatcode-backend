import crypto from 'crypto';

export const useToken = (req) => {
    const token = crypto.randomBytes(32).toString('hex');
    const getToken = req.cookies.heatcodeAuthToken;
    return { token, getToken };
}