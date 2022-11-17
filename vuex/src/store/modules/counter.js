export default {
	namespaced: true,
	state() {
		return {
			counter: 1,
		}
	},
	mutations: {
		increment(state) {
			state.counter++;
		},
		add(state, payload) {
			state.counter += payload;
		}
	},
	actions: {
		incrementAsync({commit}, payload ) {
			
			setTimeout(() => {
				commit('add', payload.value)
			}, payload.delay)
		}
	},
	getters: {
		counter(state) {
			return state.counter
		},
		doubleCounter(state, getters, rootState, rootGetter) {
			
			return getters.counter * 2
		},

	}
}