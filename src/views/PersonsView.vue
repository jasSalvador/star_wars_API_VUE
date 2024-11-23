<template>
  <div class="text-center mx-auto bg-black pb-5 persons">
    <h1 class="py-5 fw-bold text-warning">PERSONAJES</h1>
    <div v-if="persons.length">
      <div class="d-flex flex-wrap container justify-content-center pt-4">
        
      <p
          v-for="(person, index) in persons" :key="index"
          class="border border-1 border-light p-2 mx-1 text-white"
          @click="$router.push(`/personaje/${index + 1}`)"
          style="cursor: pointer"
        >
        {{ person.name }}
      </p>

      </div>
      <div class="mb-5 py-5">
        <button @click="getAllPersons(next)" class="btn btn-light my-3 ms-1">Buscar más personajes</button>
      </div>
    </div>
    <p v-else class="text-white">No se encontraron personajes</p>
  </div>
</template>

<script>
import Vue from "vue"
  export default Vue.extend({
    name: "PersonsView",
    data() {
      return {
        persons: [],
        prev: null,
        next: null,
      };
    },
    methods: {
      getAllPersons(url) {
        this.$axios.get(url)
        .then((response) => {
          console.log(response.data.results);
          // this.persons = response.data.results;
          this.persons.push (... response.data.results);
          console.log(this.persons);
          // this.prev = response.data.previous
          this.next = response.data.next

          console.log(`Next: ${this.next}`);
        })
        .catch((error) => console.log(error));
      },
    },
    created() {
      this.getAllPersons("/people/");
    },
  });
</script>    

<style lang="css" scoped>
.persons {
  min-height: 100vh;
}
</style>