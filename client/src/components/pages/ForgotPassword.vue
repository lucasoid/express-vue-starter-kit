<template>
    <Page>
        <PageHeader></PageHeader>
        <PageContent>
            <h3><i class="fa fa-key"></i> Reset password</h3>
            <PasswordResetWidget />
            <router-link to="/">Log in</router-link>
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
import PasswordResetWidget from 'components/PasswordResetWidget';

export default {
  name: 'ForgotPassword',
  props: ['title'],
  components: { Page, PageHeader, PageContent, PageFooter, FooterAnon, PasswordResetWidget }
}
</script>