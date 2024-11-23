<template>
    <div class="bg-black character">
        <h1 class="fw-bold text-warning py-5 text-center mx-auto">Información del Personaje</h1>
        <div v-if="character" class="border border-light d-flex flex-column w-25 text-center mx-auto">
            <p class="text-warning bg-secondary py-1">Nombre</p>
            <p class="text-white">{{character.name}}</p>
            <p class="text-warning bg-secondary py-1">Genero</p>
            <p class="text-white">{{character.gender}}</p>
            <p class="text-warning bg-secondary py-1">Altura</p>
            <p class="text-white">{{character.height}}</p>
            <p class="text-warning bg-secondary py-1">Numero de peliculas</p>
            <p class="text-white">{{character.films.length}}</p>
        </div>
        <p v-else class="text-light text-center mx-auto">Cargando...</p>
    </div>
</template>

<script>
    import Vue from "vue"
    export default Vue.extend({
        name: "CharacterDetailsView",
        data() {
            return {
                //characterId: null,
                character: null,
            }
        },
        methods: {
            getCharacterById(id) {
                this.$axios.get(`https://swapi.dev/api/people/${id}`)
                .then((response) => { 
                    this.character = response.data;
                    console.log(response.data);
                }) .catch((error) => {
                console.error(error);
                })
            }
        },
        created() {
            const characterId = this.$route.params.id
            console.log("ID del personaje:", characterId); 
            this.getCharacterById(characterId)
        },
    })
</script>

<style lang="css" scoped>
    .character {
        min-height: 100vh;
    }
</style>