import axios from 'axios';
import jwtDecode from 'jwt-decode';
import cookie from './cookie';
const AUTH_ENDPOINT = 'http://localhost:3000/mockauth';
const COOKIE_NAME = 'access_token';

const getCachedToken = () => cookie.get(COOKIE_NAME);

const persistToken = (tokenValue) => {
    const decoded = jwtDecode(tokenValue);
    const expires = new Date(decoded.exp * 1000);
    cookie.set(COOKIE_NAME, tokenValue, expires);
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
    console.log("token?", token);
    if(!token) return false;
    const decoded = jwtDecode(getCachedToken());
    console.log("token?", decoded);
    if(!decoded) return false;
    const sub = decoded.sub;
    console.log("token?", sub);
    if(!sub) return false;
    return sub;
}

export {
    acquireToken,
    getCachedToken,
    getUserIdFromToken
}