export default {

    computed: {
        getPage() {
            return this.$route.path.replace(/.*\//, "");
        },

        pathDelete() {
            let pageDelete = 'delete';
            if (this.getPage === pageDelete) {
                return true
            }
        },

        pathEdit() {
            let pageEdit = 'edit';
            if (this.getPage === pageEdit) {
                return true
            }
        }
    },
    methods: {
        editData() {
            this.readonly = false;
        }
    }
}