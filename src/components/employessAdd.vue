<template>
    <form @submit.prevent="sendData">
        <div class="form-group">
            <input v-model="nameEmployes" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
            <input v-model="lastname"  type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1">
            <select v-model="Department" class="custom-select">
                <option disabled selected>Select department...</option>
                <option
                        v-for="dep in Deps"
                        :value="dep.name"
                        :key="dep.name"
                >{{dep.name}}</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
    export default {
        data()  {
            return {
                nameEmployes: '',
                lastname: '',
                Department: ''
            }
        },
        computed: {
            Deps() {
                return this.$store.state.data.deps;
            }
        },
        methods: {
            sendData() {
                return this.$store.commit('addEmployee', {
                    name: this.nameEmployes,
                    lastName: this.lastname,
                    departmentId: this.Department
                })
            }
        }
    }
</script>

<style scoped>

</style>