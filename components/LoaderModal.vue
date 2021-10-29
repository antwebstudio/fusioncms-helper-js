<template>
    <div>
        <p-modal name="loader-modal" title="" key="loader_modal">
            <template slot="header">&nbsp;</template>

            <div class="flex justify-center items-center">
                <spinner variant="black" />
            </div>
    
            <template slot="footer">&nbsp;</template>
        </p-modal>
    </div>
</template>

<script>

import Spinner from '../components/Spinner.vue'
import modal from '../mixins/modal'

export default {
    props: {
        loading: {

        }
    },
    watch: {
        loading(value) {
            if (!value) {
                this.closeModal('loader-modal')
            } else {
                this.openModal('loader-modal')
            }
        },
    },
    mixins: [modal],
    components: { Spinner },
    mounted() {
        
    }
}
</script>

<style>

</style>