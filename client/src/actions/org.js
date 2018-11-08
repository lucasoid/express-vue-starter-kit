
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
        store.commit({
            type: actions.SET_TEAM_SCOPE,
            scope: true
        });
    }).catch(err => {
        if(err.status && err.status === 401) {
            store.commit({
                type: actions.SET_TEAM_SCOPE,
                scope: false
            })
        }
        console.log(err);
    });    
}

export {
    init
}