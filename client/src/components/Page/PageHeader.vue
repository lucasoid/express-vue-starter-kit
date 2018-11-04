<template>
    <header>
        <div class="container">
            <div class="pure-g">
                <div class="pure-u-1 pure-u-md-1-2">
                    <div class="header-brand">
                        <img id="header-logo" src="assets/logo.png" />
                        <div class="brand-title">{{ title || defaultTitle }}</div>
                    </div>
                </div>
                <div class="pure-u-1 pure-u-md-1-2">
                    <div class="header-content">
                        <div  v-if="userId">{{ userId }}</div>
                        <div v-if="userId"><a href="/logout">Log out</a></div>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { SITE_TITLE } from 'constants';

export default {
    name: 'PageHeader',
    props: {
        userId: { type: String },
        title: {type: String}
    },
    data: () => ({
        defaultTitle: SITE_TITLE
    })
}
</script>
