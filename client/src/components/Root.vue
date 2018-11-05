<template>
    <section>
        <slot></slot>
    </section>
</template>

<script>
import * as appActions from 'actions/app';
import * as orgActions from 'actions/org';
export default {
    name: 'Root',
    beforeMount () {
        const orgId = this.$route.params.orgId;
        appActions.init().then(() => {
            orgActions.init(this.$route.params.orgId);
        })
        
    }
}
</script>