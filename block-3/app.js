const h = Vue.h
Vue.createApp({
data() {
	return {
		title: 'Main title',
	}
},
// template: `
// 	<div class="card center">
// 		<h1>{{ title }}</h1>
// 		<button class="btn" @click="title = 'New title'">Change title</button>
// 	</div>`
// ,
methods: {
	changeTitle() {
		this.title = 'New title'
	},
},
render() {
	return h('div', {
		class: 'card center'
	}, [
		h('h1', this.title ), 
		h('button', {
			class: 'btn',
			onClick: this.changeTitle,
		}, 'Change title')])
}
}).mount('#app')

// ====

let title = 'Vue 3'
let message = 'Title: ' + title 

const data = {
	title: 'Vue 3',
	message: 'Title: ' + this.title,
}

// console.log(data);

const proxy = new Proxy(data, {
	// get(target, p) {
	// 	console.log(target, p);
	// },
	set(target, key, value) {
	if (key === 'title') {
		target.message = 'Title: ' + value
		target.title = value
	}
	console.log(target);
	}
})

proxy.title = 'Angular'