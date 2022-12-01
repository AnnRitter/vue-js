import { createStore } from 'vuex'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
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
				const response = await fetch('https://vue-composition-default-rtdb.firebaseio.com/tasks.json', {
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
			context.commit('loader', result)
			} 
			catch(e) {
				console.log(e.message);
			}
		},
		async changeData(data) {
			console.log(db);
			try{ 
				const taskRef = doc(db, 'tasks', data.id);
				console.log(taskRef);
				await setDoc(taskRef, {
					type: '123344',
				}, {
					merge: true
				});
			} catch(e) {
				console.log(e.message);
			}
			
		}
		
	},
	
})