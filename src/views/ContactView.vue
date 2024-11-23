<template>
    <div class="bg-black pb-5 text-center mx-auto contact">
        <h1 class="text-warning fw-bold pt-5 pb-3">CONTACTO</h1>
        <p class="text-white pb-4">Contáctanos a través de nuestro formulario.</p>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="w-50 text-center mx-auto">

            <b-form-group id="input-group-2" label="Nombre completo:" label-for="input-2" class="text-white text-start mb-3">
                <b-form-input
                id="input-2"
                v-model="form.nombre"
                placeholder="Nombre"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Correo electrónico:"
                label-for="input-1"
                class="text-white text-start mb-3"
            >
                <b-form-input
                id="input-1"
                v-model="form.correo"
                type="email"
                placeholder="Email"
                required
                ></b-form-input>
            </b-form-group>


            <b-form-group
                id="input-group-3"
                label="Mensaje:"
                label-for="input-3"
                class="text-white text-start mb-3"
            >
                <b-form-textarea
                    id="textarea"
                    v-model="form.mensaje"
                    placeholder="Enter something..."
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
            </b-form-group>

            <pre class="mt-3 mb-0">{{ mensaje }}</pre>

            <b-button type="submit" variant="success" class="mt-4">Enviar</b-button>
        </b-form>
    </div>
</template>


<script>
import Vue from "vue"
export default Vue.extend({
    name: "ContactView",
    data() {
        return {
            form: {
            nombre: '',
            correo: '',
            mensaje: ''
            },
            show: true
            }
        },
        methods: {
        onSubmit(event) {
            event.preventDefault()
            //alert("Gracias por contactarnos" + JSON.stringify(this.form))
            alert(`Gracias por contactarnos ${this.form.nombre} \n\nCorreo: ${this.form.correo} \n\nMensaje: ${this.form.mensaje}`)
        }
    },
});

</script>

<style lang="css" scoped>
    .contact {
        min-height: 100vh;
    }
</style>