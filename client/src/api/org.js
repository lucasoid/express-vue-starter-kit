import base from './base';

const list = () => {
    return base.get({endpoint: '/organizations'});
}

const find = (orgId) => {
    return base.get({endpoint: '/organizations/' + orgId});
}

export default {
    list,
    find
};
