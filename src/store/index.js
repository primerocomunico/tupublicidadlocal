import Vue from 'vue';
import Vuex from 'vuex';
const firebase = require('firebase/app');
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  // Manejo de datos
  state: {
    clientes: [
      {
        id: '01',
        titulo: 'carnicería juanjo',
        fotos: 'https://www.foodretail.es/2019/06/19/retailers/Seccion-carniceria-supermercado-Hiperber_1338476155_400003_660x400.jpg',
        categoria: 'comida'
      },
      {
        id: '02',
        titulo: 'Tacos Don chencho',
        fotos: 'https://cdni.rt.com/actualidad/public_images/2019.07/thumbnail/5d3a067108f3d9fb5e8b45ba.jpg',
        categoria: 'comida'
      },
      {
        id: '03',
        titulo: 'Papelería Practika',
        fotos: 'https://secureservercdn.net/160.153.137.170/d0l.e26.myftpupload.com/wp-content/uploads/2019/05/Los_Belones_Papeleria_Yoyes_20190325_0006_Easy-Resize.com_-768x512.jpg',
        categoria: 'oficina'
      }
    ],
    user: '',
    error: ''
  },
  // Manejo de operaciones (métodos)
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  // Manejo de acciones que obtienen datos del exterior
  actions: {
    createUser({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        commit('setUser', {email: res.user.email, uid: res.user.uid});
        router.push({name: 'Home'});
      })
      .catch(err => {
        commit('setError', {message: err.message});
      })
    }
  },
  modules: {
  }
})
