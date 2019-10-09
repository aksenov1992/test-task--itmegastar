<template>
    <div>
        <h2>Create {{getIdPage}}</h2>
        <div v-if="getIdPage === 'Employees'"><employessAdd/></div>
        <div v-else-if="getIdPage === 'Departments' "><deparmentAdd/></div>

    </div>
</template>

<script>
    import employessAdd from "../components/employessAdd";
    import deparmentAdd from "../components/deparmentAdd";

    export default {
        components: {
            deparmentAdd,
            employessAdd
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