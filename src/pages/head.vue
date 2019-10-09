<template>
    <div>
        <h1>{{id}}</h1>
        <ul class="list-group list-group-flush">
            <router-link
                    tag="li"
                    class="list-group-item list-group-item-action"
                    :to="id + '/edit'"
            ><a> Edit {{id}}</a>
            </router-link>
            <router-link
                    tag="li"
                    class="list-group-item list-group-item-action"
                    :to="id + '/view'"
            ><a> View {{id}}</a>
            </router-link>
            <router-link
                    tag="li"
                    class="list-group-item list-group-item-action"
                    :to="id + '/add'"
            ><a> Add {{id}}</a>
            </router-link>
            <router-link
                    tag="li"
                    class="list-group-item list-group-item-action"
                    :to="id + '/delete'"
            ><a> Delete {{id}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              id: this.$route.params.id
          }
        },
        watch: {
          $route(to) {
              this.id = to.params.id;
          }
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>