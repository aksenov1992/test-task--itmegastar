<template>
    <form @submit.prevent="sendData">
        <div class="form-group">
            <input v-model="Name" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
            <input v-model="Description"  type="text" class="form-control" placeholder="Description" aria-label="Last Name" aria-describedby="basic-addon1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
    export default {
        data()  {
            return {
                Name: '',
                Description: '',
            }
        },
        computed: {

        },
        methods: {
            sendData() {
                return this.$store.commit('addDeps', {
                    name: this.Name,
                    description: this.Description,
                })
            }
        }
    }
</script>

<style scoped>

</style>