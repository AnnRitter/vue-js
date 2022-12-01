import { createStore } from 'vuex'

import { getFirestore } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAaApjmJPnOjdgS5YRcw7WETnRnIMC8Mmw",
  authDomain: "vue-composition-12954.firebaseapp.com",
  projectId: "vue-composition-12954",
  storageBucket: "vue-composition-12954.appspot.com",
  messagingSenderId: "519435316089",
  appId: "1:519435316089:web:15e78f361d51698eaf1da8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default createStore({
	state() {
		return {
			tasks: [],
		}
	},
	getters: {
    activeTasks: state => {
      return state.tasks.filter(task => task.type === 'active').length;
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
				const response = await fetch('https://vue-composition-12954-default-rtdb.firebaseio.com/tasks.json', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',	
				},
			})
			const data = await response.json()
			
			const result = Object.keys(data).map(key => {
				return {
					type: data[key].type,
					title: data[key].title,
					date: data[key].date,
					description: data[key].description,
					id: key,
				}
			})
			console.log(result);
			context.commit('loader', result)
			} 
			catch(e) {
				console.log(e.message);
			}
		},
		async changeData(context, payload) {
			try { 
				const taskRef = doc(db, 'tasks', payload.id)
				console.log(taskRef);
				const update = await updateDoc(taskRef, { type: payload.type })			
			} catch(e) {
				console.log(e.message);
			}
			
		}
		
	},
	
})