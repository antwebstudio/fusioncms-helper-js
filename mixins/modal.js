
// import ConfirmModal from '@/pages/Components/ConfirmModal'

export default {
    components: {
        // ConfirmModal,
    },
    methods: {
        closeModal(name, value) {
            //var name = 'price-setting-' + key
            this.$bus.$emit('toggle-modal-' + name, value)
        },
        openModal(name, value) {
            //var name = 'price-setting-' + key
            this.$bus.$emit('toggle-modal-' + name, value)
        },
    },
}