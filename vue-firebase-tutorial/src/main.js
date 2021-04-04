import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = '';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyACRdrkTxZGazFOLq8Bie2lS0gxVm_-8Nk",
  authDomain: "vue-firebase-tutorial-b28d1.firebaseapp.com",
  projectId: "vue-firebase-tutorial-b28d1",
  storageBucket: "vue-firebase-tutorial-b28d1.appspot.com",
  messagingSenderId: "94500222583",
  appId: "1:94500222583:web:6515b6e94cbd3ac44af872"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});

