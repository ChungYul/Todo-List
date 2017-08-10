import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
//import './css/app.css'

Vue.use(VueMaterial)

var EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function () {
            return EventBus;
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
