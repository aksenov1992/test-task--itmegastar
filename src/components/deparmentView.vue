<template>
    <div class="container">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name Department</th>
                <th scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(dep, index) in Deps" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td><input v-model.lazy="dep.name" type="text" class="form-control border-0 bg-white" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" :readonly="readonly" ></td>
                <td><input v-model.lazy="dep.description" type="text" class="form-control border-0 bg-white" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" :readonly="readonly" ></td>
                <td v-if="pathDelete">
                    <button type="button" class="btn btn-outline-danger" @click="deleteItem(dep)">Delete</button>
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
            Deps() {
                return this.$store.state.data.deps;
            }
        },
        methods: {
            deleteItem(dep) {
                this.$store.commit('removeData', dep);
            }
        }
    }
</script>

<style scoped>

</style>