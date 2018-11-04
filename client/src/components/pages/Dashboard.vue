<template>
    <Page>
        <PageHeader v-bind:userId="userId"></PageHeader>
        <PageContent>
            <CardGrid>
                <Card title="Alerts" icon="bell" v-bind:footerComponent="footerComponent">
                    Hi, this is some card content. Put some text here, or a list, or a graphic.
                </Card>
            </CardGrid>
        </PageContent>
        <PageFooter>
            <FooterLoggedIn />
        </PageFooter>
    </Page>
</template>

<script>
import Page from 'components/Page';
import PageHeader from 'components/Page/PageHeader';
import PageContent from 'components/Page/PageContent';
import PageFooter from 'components/Page/PageFooter';
import FooterLoggedIn from 'components/Footer/FooterLoggedIn';
import Card from 'components/Card';
import CardGrid from 'components/CardGrid';

const FooterComponent = {
    template: '<router-link to="/alerts">View all</router-link>'
};

export default {
    name: 'Dashboard',
    props: ['userId'],
    computed: {
        footerComponent () {
            return FooterComponent;
        }
    },
    components: { Page, PageHeader, PageFooter, PageContent, Card, CardGrid, FooterLoggedIn }
}
</script>