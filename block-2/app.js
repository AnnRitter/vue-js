Vue.createApp({
	data() {
		return {
			title: 'Title',
			mainTitle: '<h1>Main title</h1>',
			person: {
				firstName: 'Anastasia',
				lastName: 'Telnova',
				age: 24,
			},
			items: [1,2,3,4,5,6]
		}
	},
	computed: {
		evenItems() {
			return this.items.filter(item => item % 2 === 0)
		}
	},
	methods: {
		addItem() {
		
			this.items.unshift(this.$refs.mainInput.value);
			this.$refs.mainInput.value = ''
		},
		removeItem(index) {
			this.items.splice(index, 1)
		}
	}
}).mount('#app')