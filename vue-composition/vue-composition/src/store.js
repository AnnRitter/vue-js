import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			tasks: [],
		}
	},
	mutations: {
		loader(state, payload) {
			state.tasks = payload
		}
	},
	actions: {
			async load(context) {
			try {
				const response = await fetch('https://vue-composition-default-rtdb.firebaseio.com/tasks.json', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',	
				},
			})
			const data = await response.json()
			
			const result = Object.keys(data).map(key => {
				return {
					title: data[key].title,
					date: data[key].date,
					description: data[key].description,
					id: key,
				}
			})
			context.commit('loader', result)
			} 
			catch(e) {
				console.log(e.message);
			}
		}
	}
})