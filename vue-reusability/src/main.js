import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from './translatePlugin'

const app = createApp(App)
// глобальное 
// .directive('focus', {
// 	mounted(elem) {
// 		elem.focus()
// 	}
// })

const ru = {
	app: {
		title: 'Работа с плагинами Vue',
		button: 'ru',
	}
}

const en = {
	app: {
		title: 'Plugins in Vue3',
		button: 'en',
	}
}



app.use(translatePlugin, {ru, en})
app.mount('#app')
