<template>
    <div class="card">
        <div class="card-inner">
            <header>
                <h3><i v-bind:class="iconClass"></i>{{ title }}</h3>
            </header>
            <div class="card-content">
                <slot></slot>
            </div>
            <footer>
                <component v-bind:is="footerComponent"></component>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: { type: String },
        icon: { type: String },
        footerComponent: { type: Object }
    },
    computed: {
        iconClass () {
            return 'fa fa-' + this.icon;
        }
    }
};
</script>