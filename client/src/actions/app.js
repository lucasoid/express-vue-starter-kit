
import api from 'api';
import { store, actions } from 'store';
import { getUserIdFromToken } from 'utils/accessToken';


const init = () => {

    const userId = getUserIdFromToken();

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