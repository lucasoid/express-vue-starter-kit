import Vuex from 'vuex';

const actions = {
    SET_USER: 'setUser',
    SET_USER_LOGGED_IN: 'setUserLoggedIn',
    SET_ORGS: 'setOrgs',
    SET_TEAM: 'setTeam',
    SET_TEAM_SCOPE: 'setTeamScope',
    SELECT_ORG: 'selectOrg'
}
const store = new Vuex.Store({
    state: {
        orgs: [],
        selectedOrg: {
            id: '',
            name: '',
            team: [],
            scopes: {
                team: true
            }
        },
        user: {
            id: '',
            name: '',
            isLoggedIn: true
        }
    },
    mutations: {
        [actions.SET_USER]: (state, payload) => {
            state.user = ({...state.user, ...payload.user});
        },
        [actions.SET_USER_LOGGED_IN]: (state, payload) => {
            state.user = ({...state.user, isLoggedIn: payload.isLoggedIn});
        },
        [actions.SET_ORGS]: (state, payload) => {
            state.orgs = payload.orgs;
        },
        [actions.SELECT_ORG]: (state, payload) => {
            let org = state.orgs.find(org => org.id === payload.id);
            state.selectedOrg = {
                id: org.id,
                name: org.name,
                team: [],
                scopes: {
                    team: true
                }
            }
        },
        [actions.SET_TEAM]: (state, payload) => {
            state.selectedOrg.team = payload.team;
        },
        [actions.SET_TEAM_SCOPE]: (state, payload) => {
            state.selectedOrg.scopes.team = payload.scope;
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