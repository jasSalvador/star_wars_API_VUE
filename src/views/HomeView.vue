<template>
  <div class="home">
    <img :src="require('@/assets/star-wars.webp')" alt="Star wars" class="img-home"/>
  </div>
</template>


<script>
// export default {
//   name: 'HomeView',
//   data(){
//     return{
//       persons:[]
//     }
//   },
//   methods: {
//     async getPersons(){
//       try {
//         const response = await this.$axios.get('https://swapi.dev/api/people/');
//         console.log(response.data.results)
//         this.persons = response.data
//       } catch(error){
//         console.error(error)
//       }
//     } 
//   },
//   created() {
//     this.getPersons()
//   },
// }
</script>

<style>
    .img-home {
      width: 100%;
      height: 100vh;
      display: block;
      background-position: center;
      background-size: cover;
    }
</style>