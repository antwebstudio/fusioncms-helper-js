
// import ConfirmModal from '@/pages/Components/ConfirmModal'

export default {
    components: {
        // ConfirmModal,
    },
    methods: {
        closeModal(name) {
            //var name = 'price-setting-' + key
            this.$bus.$emit('toggle-modal-' + name)
        },
        openModal(name) {
            //var name = 'price-setting-' + key
            this.$bus.$emit('toggle-modal-' + name)
        },
    },
}