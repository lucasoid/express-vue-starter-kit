import Vuex from 'vuex';

const actions = {
    SET_USER: 'setUser',
    SET_ORGS: 'setOrgs',
    SET_TEAM: 'setTeam',
    SELECT_ORG: 'selectOrg'
}
const store = new Vuex.Store({
    state: {
        orgs: [],
        selectedOrg: {
            id: '',
            name: '',
            team: []
        },
        user: {
            id: '',
            name: ''
        }
    },
    mutations: {
        [actions.SET_USER]: (state, payload) => {
            state.user = ({...state.user, ...payload.user});
        },
        [actions.SET_ORGS]: (state, payload) => {
            state.orgs = payload.orgs;
        },
        [actions.SELECT_ORG]: (state, payload) => {
            let org = state.orgs.find(org => org.id === payload.id);
            state.selectedOrg = {
                id: org.id,
                name: org.name,
                team: []
            }
        },
        [actions.SET_TEAM]: (state, payload) => {
            state.selectedOrg.team = payload.team;
        }
    },
    getters: {
        getOrgById: (state) => (id) => {
          return state.orgs.find(org => org.id === id)
        }
    }
});

export {
    store,
    actions
};