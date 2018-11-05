
import api from 'api';
import { store, actions } from 'store';

const init = (orgId) => {

    // lazy load:
    if(orgId === store.state.selectedOrg.id)
        // my job here is done
        return;
    
    store.commit({
        type: actions.SELECT_ORG,
        id: orgId
    });
    
    api.team.list(orgId).then(result => {
        store.commit({
            type: actions.SET_TEAM,
            team: result
        });
    }).catch(err => console.log(err));    
}

export {
    init
}