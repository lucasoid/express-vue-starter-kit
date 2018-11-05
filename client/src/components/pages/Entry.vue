<template>
    <Page>
        <PageHeader></PageHeader>
        <PageContent>
            <section class="box">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-1-2 centered">
                        <h3><i class="fa fa-building"></i> Select organization</h3>
                        <div v-for="(org, index) in orgs" v-bind:key="index">
                            <router-link v-bind:to="org.link">{{ org.name }}</router-link>
                        </div>
                    </div>
                </div>
            </section>            
        </PageContent>
        <PageFooter>
            <FooterLoggedIn />
        </PageFooter>
    </Page>
</template>

<script>
import { getToken, acquireToken } from 'utils/accessToken';
import Page from 'components/Page';
import PageHeader from 'components/Page/Header';
import PageContent from 'components/Page/Content';
import PageFooter from 'components/Page/Footer';
import FooterLoggedIn from 'components/Footer/FooterLoggedIn';
import SelectOrgWidget from 'components/Widgets/SelectOrg';
import { mapState } from 'vuex';

export default {
    name: 'Login',
    computed: mapState({
        orgs: state => state.orgs.map(org => ({...org, link: '/orgs/' + org.id}))
    }),
    components: { Page, PageHeader, PageContent, PageFooter, FooterLoggedIn, SelectOrgWidget }
}
</script>