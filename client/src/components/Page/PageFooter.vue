<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="brand-title">{{ title }}</div>
                <slot></slot>
            </div>
        </div>
    </footer>
</template>

<script>
import { SITE_TITLE } from 'constants';
export default {
    name: 'PageFooter',
    data: () => ({
        title: SITE_TITLE
    })
}
</script>