import axios from 'axios';
import { store, actions } from 'store';
import { getCachedToken } from 'utils/accessToken';
import { API_BASE_URL } from 'constants';

const get = ({endpoint, headers}) => {
    const token = getCachedToken();
    if(!token) {
        // reauth
        store.commit({
            type: actions.SET_USER_LOGGED_IN,
            isLoggedIn: false
        });
    }
    console.log(API_BASE_URL + endpoint);
    return new Promise((resolve, reject) => {
        axios.get(API_BASE_URL + endpoint, {
            headers: Object.assign({}, {
                "Authorization": `Bearer ` + token,
                "Content-Type": 'application/json'
            }, headers)
        }).then((response) => {
            resolve(response.data);
        }).catch(err => reject(err.response));
    });    
}

export default {
    get
};