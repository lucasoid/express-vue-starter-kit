
import api from 'api';
import { store, actions } from 'store';
import { getUserIdFromToken } from 'utils/accessToken';


const init = () => {

    const userId = getUserIdFromToken();

    if(!userId) {
        store.commit({
            type: actions.SET_USER_LOGGED_IN,
            isLoggedIn: false
        });
        return;
    }
    
    store.commit({
        type: actions.SET_USER,
        user: {
            id: userId
        }
    });

    const getOrgs = api.org.list(userId);
    getOrgs.then(result => {
        store.commit({
            type: actions.SET_ORGS,
            orgs: result
        });
    }).catch(err => console.log(err));
        
    return Promise.all([getOrgs]);
}

export {
    init
}