import axios from "axios"
import { error } from '../../utils/error.js'
const TOKEN = 'jwt-token'

export default {
	namespaced: true,
	
	state() {
		return {
			token: localStorage.getItem(TOKEN),
		}
	},
	mutations: {
		setToken(state, token) {
			state.token = token
			localStorage.setItem(TOKEN, token)
		},
		logout(state) {
			state.token = null
			localStorage.removeItem(TOKEN)
		}
	},
	actions: {
		async login({ commit, dispatch }, payload) {
			try {
				const URL =  `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`
				const { data } = await axios.post(URL, {...payload, returnSecureToken: true})
				commit('setToken', data.idToken )
				commit('clearMessage', null, {root: true})
			} catch (e) {
				dispatch('setMessage', {
					value: error(e.response.data.error.message),
					type: 'danger', 
				}, {root: true})
				throw new Error()
			}
		}
	},
	getters: {
		token(state) {
			return state.token
		},
		isAuthenticated(_, getters) {
			return !!getters.token
		}
	}
}