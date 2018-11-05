<template>
    <Page>
        <PageHeader></PageHeader>
        <PageContent>
            <section class="box">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-1-2 centered">
                        <h3><i class="fa fa-key"></i> Reset password</h3>
                        <PasswordResetWidget />
                        <router-link to="/">Log in</router-link>
                    </div>
                </div>
            </section>
        </PageContent>
        <PageFooter>
            <FooterAnon />
        </PageFooter>
    </Page>
</template>

<script>
import { getToken, acquireToken } from 'utils/accessToken';
import Page from 'components/Page';
import PageHeader from 'components/Page/Header';
import PageContent from 'components/Page/Content';
import PageFooter from 'components/Page/Footer';
import FooterAnon from 'components/Footer/FooterAnon';
import PasswordResetWidget from 'components/Widgets/PasswordReset';

export default {
  name: 'ForgotPassword',
  props: ['title'],
  components: { Page, PageHeader, PageContent, PageFooter, FooterAnon, PasswordResetWidget }
}
</script>