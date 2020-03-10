<template>
  <div>
     <h1>Vista de un solo ANUNCIO</h1>
     <h3>Nombre del negocio: {{clientes[id].titulo}}</h3>
      <img :src="clientes[id].fotos" />
      <p>Categoría: {{clientes[id].categoria}}</p>
     <form>
       Nombre del negocio: <input type="text" v-model="clientes[id].titulo">
     </form>
  </div>
</template>

<script>
// Store
import { mapState, mapMutations, mapActions } from "vuex";

export default {
     name: 'Ad',
     data() {
       return {
         id: this.$route.params.id
       }
     },
     computed: {
       ...mapState(['clientes'])
     }
}
</script>