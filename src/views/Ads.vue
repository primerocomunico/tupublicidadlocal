<template>
  <div class="about">
    <h1>This is an ADS page</h1>
    <hr />
    <div v-for="(cliente, index) of clientes" :key="index">
      <h3>Nombre del negocio: {{cliente.titulo}}</h3>
      <img :src="cliente.fotos" />
      <p>Categoría: {{cliente.categoria}}</p>
      <router-link :to="{name: 'Ad', params: {id: index}}">
      <button>EDITAR</button>
      </router-link>
    </div>
    <hr />
  </div>
</template>

<script>

// Store
import { mapState } from "vuex";

export default {
  name: "Ads",
  computed: {
    ...mapState(['clientes'])
  }
};
</script>