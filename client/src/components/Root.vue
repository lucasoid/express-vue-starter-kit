<template>
    <section>
        <slot></slot>
        <Modal v-if="!isLoggedIn">
            Your session has expired. Please log in again.
            <LoginWidget v-bind:redirect="false" />
        </Modal>
    </section>
</template>

<script>
import * as appActions from 'actions/app';
import * as orgActions from 'actions/org';
import Modal from 'components/Modal';
import LoginWidget from 'components/Widgets/Login';

import { mapState } from 'vuex';

export default {
    name: 'Root',
    computed: {
        ...mapState({
            isLoggedIn: (state) => {
                console.log("STORE: ", state.user);
                return state.user.isLoggedIn;
            }
        })
    },
    beforeMount () {
        const orgId = this.$route.params.orgId;
        appActions.init().then(() => {
            orgActions.init(this.$route.params.orgId);
        });
    },
    components: { Modal, LoginWidget }
}
</script>