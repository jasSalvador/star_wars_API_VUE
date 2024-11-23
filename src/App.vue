<template>
  <div id="app">
    <NavbarComponent/>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<script>
    import NavbarComponent from "./components/NavbarComponent.vue";
    import Vue from "vue";
    export default Vue.extend({
      name:"app",
      components:{
        NavbarComponent,
      },
    })
</script>


<style>

</style>
