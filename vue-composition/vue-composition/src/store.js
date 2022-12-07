import { createStore } from 'vuex'

import { getFirestore } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, child, push, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAaApjmJPnOjdgS5YRcw7WETnRnIMC8Mmw",
  authDomain: "vue-composition-12954.firebaseapp.com",
  databaseURL: "https://vue-composition-12954-default-rtdb.firebaseio.com",
  projectId: "vue-composition-12954",
  storageBucket: "vue-composition-12954.appspot.com",
  messagingSenderId: "519435316089",
  appId: "1:519435316089:web:15e78f361d51698eaf1da8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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
			const starCountRef = ref(database, 'tasks/');
			console.log(starCountRef);

			onValue(starCountRef, (snapshot) => {
				const data = snapshot.val();
				const result = Object.keys(data).map(key => {
					return {
						type: data[key].type,
						title: data[key].title,
						date: data[key].date,
						description: data[key].description,
						id: key,
					}
				})
				context.commit('loader', result)
			});
		},

		async changeData(context, payload) {

			const taskData = {
					type: payload.type
			};

			const updates = {};
			updates['/tasks/' + payload.id] = taskData;
			return update(ref(database), updates);
			// try { 
			// 	const taskRef = doc(db, 'tasks', payload.id)
			// 	console.log(taskRef);
			// 	const update = await updateDoc(taskRef, { type: payload.type })			
			// } catch(e) {
			// 	console.log(e.message);
			// }
			
		}
		
	},
	
})