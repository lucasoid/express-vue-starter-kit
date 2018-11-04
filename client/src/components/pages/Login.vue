<template>
    <Page>
        <PageHeader></PageHeader>
        <PageContent>
            <h3><i class="fa fa-key"></i> Log in</h3>
            <LoginWidget />
            <router-link to="/reset-password">Forgot password?</router-link>
        </PageContent>
        <PageFooter>
            <FooterAnon />
        </PageFooter>
    </Page>
</template>

<script>
import { getToken, acquireToken } from 'utils/accessToken';
import Page from 'components/Page';
import PageHeader from 'components/Page/PageHeader';
import PageContent from 'components/Page/PageContent';
import PageFooter from 'components/Page/PageFooter';
import FooterAnon from 'components/Footer/FooterAnon';
import LoginWidget from 'components/LoginWidget';

export default {
  name: 'Login',
  props: ['title'],
  components: { Page, PageHeader, PageContent, PageFooter, FooterAnon, LoginWidget }
}
</script>