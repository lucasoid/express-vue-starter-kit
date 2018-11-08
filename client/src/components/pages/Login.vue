<template>
    <Page>
        <PageHeader></PageHeader>
        <PageContent>
            <section class="box">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-1-2 centered">
                        <h3><i class="fa fa-key"></i> Log in</h3>
                        <LoginWidget redirect="/" />
                        <router-link to="/reset-password">Forgot password?</router-link>
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
import LoginWidget from 'components/Widgets/Login';

export default {
  name: 'Login',
  props: ['title'],
  components: { Page, PageHeader, PageContent, PageFooter, FooterAnon, LoginWidget }
}
</script>