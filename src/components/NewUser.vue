<template>
     <div>
          <h1>CREAR NUEVO USUARIO</h1>
          <p>{{error.message}}</p>
          <!-- los argumentos de createUser es un objeto -->
          <form @submit.prevent="createUser({email, password})">
               Email: <input type="email" v-model="email">
               Password: <input type="password" v-model="password">
               <button type="submit">REGÍSTRATE</button>
          </form>
     </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
     name: 'NewUser',
     data() {
          return {
               email: '',
               password: ''
          }
     },
     computed: {
          ...mapState(['error']),
     },
     methods: {
          ...mapActions(['createUser', 'create'])
     }
}
</script>