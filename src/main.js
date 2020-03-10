import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/firestore');
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC3RpZKD69Fb6ztT3IOPWvyNUsRzv6ljdE",
  authDomain: "tupublicidadonline-9c9fa.firebaseapp.com",
  databaseURL: "https://tupublicidadonline-9c9fa.firebaseio.com",
  projectId: "tupublicidadonline-9c9fa",
  storageBucket: "tupublicidadonline-9c9fa.appspot.com",
  messagingSenderId: "506791101389",
  appId: "1:506791101389:web:602e159f9265fb5215fa84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
