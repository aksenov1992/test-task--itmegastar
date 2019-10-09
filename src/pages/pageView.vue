<template>
    <div>
    <div v-if="getIdPage === 'Departments'">
        <deparmentView/>
    </div>
    <div v-else-if="getIdPage === 'Employees'">
        <employeesView/>
    </div>
    </div>
</template>

<script>
    import deparmentView from "../components/deparmentView";
    import employeesView from "../components/employeesView";
    export default {
        components: {
            deparmentView,
            employeesView
        },
        computed: {
            getIdPage() {
                return this.$route.params.id;
            }
        }

    }
</script>

<style scoped>

</style>