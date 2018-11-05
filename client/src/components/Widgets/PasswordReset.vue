<template>
    <div class="login-widget">
        <form class="pure-form pure-form-stacked" @submit="reset">
            <fieldset class="pure-group">
                <label for="email">Enter your email. We'll send you a password reset link.</label>     
                <input id="email" placeholder="Email" type="text" v-model="email" class="pure-input-1" />
                <button class="pure-button pure-button-primary pure-input-1" type="submit">Reset password</button>
            </fieldset>
            <div>
                <span v-if="errorMessage">{{ errorMessage }}</span>
            </div>
        </form>
    </div>
</template>

<script>
import { acquireToken } from 'utils/accessToken';

export default {
    name: 'PasswordResetWidget',
    data: () => ({
        email: '',
        errorMessage : '',
    }),
    methods: {
        reset (event) {
            event.preventDefault();
            alert("Password reset \"sent\" ;)");
        }
    }
}
</script>