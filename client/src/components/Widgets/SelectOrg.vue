<template>
    <div class="select-org-widget">
        <form class="pure-form pure-form-stacked" @submit="select">
            <fieldset>
                <div v-for="(org, index) in orgs" v-bind:key="index">
                    <label v-bind:for="index" class="pure-radio">
                        <input type="radio" v-bind:id="index" v-bind:value="org" v-model="newSelection"> {{ org.name }}
                    </label>
                </div>
                <button class="pure-button pure-button-primary pure-input-1" type="submit">Go</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
import { store, actions } from 'store';
import { mapState } from 'vuex';

export default {
    name: 'SelectOrgWidget',
    data: () => ({
        newSelection: {}
    }),
    computed: mapState({
        orgs: state => state.orgs,
        selectedOrg: state => state.selectedOrg
    }),
    methods: {
        select (event) {
            event.preventDefault();
            store.commit({
                type: actions.SELECT_ORG,
                org: this.$data.newSelection
            });
        }
    }
}
</script>