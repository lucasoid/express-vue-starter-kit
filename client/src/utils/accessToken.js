import axios from 'axios';
import jwtDecode from 'jwt-decode';
import cookie from './cookie';
const AUTH_ENDPOINT = 'http://localhost:3000/mockauth';
const COOKIE_NAME = 'access_token';

const getCachedToken = () => cookie.get(COOKIE_NAME);

const persistToken = (tokenValue) => {
    const decoded = jwtDecode(tokenValue);
    cookie.set(COOKIE_NAME, tokenValue, decoded.exp);
}

const acquireToken = ({username, password}) => {
    
    return new Promise((resolve, reject) => {
        let acquire = axios.post(AUTH_ENDPOINT, {username, password});
        acquire.then((result) => {
            persistToken(result.data.access_token);
            resolve(result.data.access_token);
        })
        .catch(reject);
    });    
}

const getUserIdFromToken = () => {
    const token = getCachedToken();
    if(!token) return false;
    const decoded = jwtDecode(getCachedToken());
    if(!decoded) return false;
    const sub = decoded.sub;
    if(!sub) return false;
    return sub;
}

export {
    acquireToken,
    getCachedToken,
    getUserIdFromToken
}