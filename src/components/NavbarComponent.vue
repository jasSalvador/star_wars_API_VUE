<template>
    <b-navbar toggleable="lg" variant="info" class="bg-warning py-3">
    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <router-link to="/" class="ms-3 link">Inicio | </router-link>
            <router-link to="/personajes" class="ms-2 link">Personajes | </router-link>
            <router-link to="/contacto" class="ms-2 link">Contácto | </router-link>
            
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    
</template>

<script>
import Vue from "vue"
    export default Vue.extend({
        name:"NavbarComponent"
    })
</script>

<style scoped>
    .link {
        color: black;
        text-decoration: none;
    }
    .link:hover {
        color: rgb(49, 47, 47);
    }
</style>