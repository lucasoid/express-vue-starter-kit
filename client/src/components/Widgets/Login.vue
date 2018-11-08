<template>
    <div class="login-widget">
        <form class="pure-form pure-form-stacked" @submit="login">
            <fieldset class="pure-group">            
                <input id="username" placeholder="User name" type="text" v-model="username" class="pure-input-1" />
                <input id="password" placeholder="Password" type="password" v-model="password" class="pure-input-1" />
                <button class="pure-button pure-button-primary pure-input-1" type="submit">Log in</button>
            </fieldset>
            <div>
                <span v-if="errorMessage">{{ errorMessage }}</span>
            </div>
        </form>
    </div>
</template>

<script>
import { acquireToken } from 'utils/accessToken';
import { store, actions } from 'store';

export default {
    name: 'LoginWidget',
    props: ['redirect'],
    data: () => ({
        username: '',
        password: '',
        errorMessage : '',
    }),
    methods: {
        login (event) {
            event.preventDefault();
            acquireToken({username: this.$data.username, password: this.$data.password}).then(result => {
                store.commit({
                    type: actions.SET_USER_LOGGED_IN,
                    isLoggedIn: true
                });
                if(this.$props.redirect) window.location = this.$props.redirect;
            }).catch(err => {
                this.$data.errorMessage = 'That didn\'t work. :(. Try again?';
                console.log(err);
            })
        }
    }
}
</script>