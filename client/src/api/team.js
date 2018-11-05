import base from './base';

const list = (orgId) => {
    return base.get({endpoint: `/organizations/${orgId}/users`});
}

const find = (orgId, userId) => {
    return base.get({endpoint: `/organizations/${orgId}/users/${userId}`});
}

export default {
    list,
    find
};
