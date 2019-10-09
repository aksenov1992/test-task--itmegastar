<template>
    <div class="row">
        <div class="">
            <ul class="list-group list-group-flush">
                <li class="menu__el">
                    <router-link
                            to="/Departments"
                            tag="li"
                            class="list-group-item list-group-item-action"
                    >
                        <a>Departments</a>
                    </router-link>
                </li>
                <li class="menu__el">
                    <router-link
                            to="/Employees"
                            tag="li"
                            class="list-group-item list-group-item-action"
                    >
                        <a>Employees</a>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>
