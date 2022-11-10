import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import router from './router'

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// VueRouter({
// 	routes: [
// 	{path: './login', component: Login}
// 	]
// })

createApp(App)
.use(router)
  .mount('#app')
