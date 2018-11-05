<template>
    <header>
        <div class="container">
            <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2">
                    <div class="header-brand">
                        <img id="header-logo" src="assets/logo.png" />
                        <div class="brand-title">{{ title }}</div>
                    </div>
                </div>
                <div class="pure-u-1 pure-u-md-1-2">
                    <div class="header-content">                        
                        <div v-if="org && org.name">Organization: {{ org.name }} (<router-link to="/">switch</router-link>)</div>
                        <div v-if="user.id">User: {{ user.id }} (<a href="/logout">log out</a>)</div>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { SITE_TITLE } from 'constants';
import { mapState } from 'vuex';

export default {
    name: 'PageHeader',
    computed: mapState({
        title: state => SITE_TITLE,
        //orgName: state => state.selectedOrg.name,
        user: state => state.user,            
        org: state => state.selectedOrg
    })    
}
</script>
