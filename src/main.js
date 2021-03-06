import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.min.css'
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false

export const eventBus = new Vue();

window.player = null;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
