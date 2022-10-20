const App = {
	data() {
		return {
			title: 'TO DO',
			placeholder: 'Insert your task...',
			inputValue: '',
			notes: ['Task 1', 'Task 2'],
		}
	},
	methods: {
		addNewTask() {
			if (this.inputValue) {
				this.notes.push(this.inputValue)
				this.inputValue = ''
			}
		},
		removeTask(index, event) {
			this.notes.splice(index,1)
		},
		toUpperCase(item) {
			return item.toUpperCase()
		},
	},
	watch: {
		inputValue(value) {
			console.log(value);
		},
	}
	
}

const app = Vue.createApp(App).mount("#app")