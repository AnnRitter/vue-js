export default {
	
	install(app, options) {
		let current = 'ru'

		const changeLanguage = name => {
			
			current = name
		}

		app.config.globalProperties.$i18n = key => {

			return key.split('.').reduce((words, k) => {
				return words[k] || '=== UNKNOWN ==='
			}, options[current])
		}

		app.provide('i18n', changeLanguage)
	}
}