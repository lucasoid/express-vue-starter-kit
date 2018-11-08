<template>
    <Root>
        <Page>
            <PageHeader v-bind:userId="userId"></PageHeader>
            <PageContent>
                <section class="box">
                    <CardGrid>
                        <Card title="Alerts" icon="bell" v-bind:footerComponent="footerComponent">
                            Hi, this is some card content. Put some text here, or a list, or a graphic.
                        </Card>
                        <Card title="Team" icon="user-circle" v-bind:footerComponent="footerComponent">
                            <div v-if="!teamScope">Sorry, you don't have access to this content.</div>
                            <div v-else v-for="(user) in team" v-bind:key="user.id">
                                <div>{{ [user.firstName, user.lastName].join(' ')}}</div>
                                <div>{{ user.email }}</div>
                                <hr/>
                            </div>
                        </Card>
                    </CardGrid>
                </section>
            </PageContent>
            <PageFooter>
                <FooterLoggedIn />
            </PageFooter>
        </Page>
    </Root>
</template>

<script>
import Root from 'components/Root';
import Page from 'components/Page';
import PageHeader from 'components/Page/Header';
import PageContent from 'components/Page/Content';
import PageFooter from 'components/Page/Footer';
import FooterLoggedIn from 'components/Footer/FooterLoggedIn';
import Card from 'components/Card';
import CardGrid from 'components/CardGrid';
import { mapState } from 'vuex';

const FooterComponent = {
    template: '<router-link to="/alerts">View all</router-link>'
};

export default {
    name: 'Dashboard',
    props: ['userId'],
    computed: {
        footerComponent () {
            return FooterComponent;
        },
        ...mapState({
            team: (state) => state.selectedOrg.team.slice(0, 5),
            teamScope: (state) => state.selectedOrg.scopes.team
        })
    },
    components: { Root, Page, PageHeader, PageFooter, PageContent, Card, CardGrid, FooterLoggedIn },
    
}
</script>