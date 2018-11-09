<template>
    <Page>
        <PageHeader v-bind:userId="userId"></PageHeader>
        <PageContent>
            <section class="box">
                <h3><i class="fa fa-meh"></i> Nothing here...</h3>
            </section>
        </PageContent>
        <PageFooter>
            <FooterAnon v-if="anon" />
            <FooterLoggedIn v-if="!anon" />
        </PageFooter>
    </Page>
</template>

<script>
import Page from 'components/Page';
import PageHeader from 'components/Page/Header';
import PageContent from 'components/Page/Content';
import PageFooter from 'components/Page/Footer';
import FooterAnon from 'components/Footer/FooterAnon';
import FooterLoggedIn from 'components/Footer/FooterLoggedIn';

export default {
  name: 'ForgotPassword',
  props: ['anon', 'userId'],
  components: { Page, PageHeader, PageContent, PageFooter, FooterAnon, FooterLoggedIn }
}
</script>