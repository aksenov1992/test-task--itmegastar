<template>
    <div class="col">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Department</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(Employee, index) in Employees" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td><input v-model="Employee.firstName" type="text" class="form-control border-0 bg-white" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" :readonly="readonly" ></td>
                <td><input v-model="Employee.lastName" type="text" class="form-control border-0 bg-white" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" :readonly="readonly" ></td>
                <td><input v-model="Employee.departmentId" type="text" class="form-control border-0 bg-white" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" :readonly="readonly"></td>
                <td v-if="pathDelete">
                    <button type="button" class="btn btn-outline-danger" @click="deleteItem(Employee)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="container mt-5" v-if="pathEdit">
            <button type="button" class="btn btn-outline-warning" @click="editData">Edit</button>
        </div>
    </div>
</template>

<script>
    import chechPath from "../mixins/chechPath";

    export default {
        mixins: [chechPath],
        data() {
            return {
                readonly: true
            }
        },
        computed: {
            Employees() {
                return this.$store.state.data.employee;
            }
        },
        methods: {
            deleteItem(Employee) {
                this.$store.commit('removeData', Employee);
            }
        }
    }
</script>

<style scoped>


</style>