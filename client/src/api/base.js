import axios from 'axios';
import { getCachedToken } from 'utils/accessToken';
import { API_BASE_URL } from 'constants';

const get = ({endpoint, headers}) => {
    const token = getCachedToken();
    console.log(API_BASE_URL + endpoint);
    return new Promise((resolve, reject) => {
        axios.get(API_BASE_URL + endpoint, {
            headers: Object.assign({}, {
                "Authorization": `Bearer ` + token,
                "Content-Type": 'application/json'
            }, headers)
        }).then((response) => {
            resolve(response.data);
        }).catch(reject);
    });    
}

export default {
    get
};