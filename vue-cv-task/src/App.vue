<template>
  <div class="container column">
		<form class="card card-w30">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" v-model="type">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>

      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" rows="3" v-model="value"></textarea>
      </div>
      <button class="btn primary" :disabled="!value" @click.prevent="addtoCV">Добавить</button>
    </form>

		<div  class="card card-w70" >
			<div v-if="dataCV.length">
				<div v-for="item in dataCV" :key="item.id" >
					<app-title 
						v-if="item.type === 'title'"
						:value="item.value"
						:id="item.id"
						@delete="deleteItem"
					></app-title>

					<app-avatar
						v-if="item.type === 'avatar'"
						:value="item.value"
						:id="item.id"
						@delete="deleteItem"
					></app-avatar>

					<app-subtitle
						v-if="item.type === 'subtitle'"
						:value="item.value"
						:id="item.id"
						@delete="deleteItem"
					></app-subtitle>

					<app-text
						v-if="item.type === 'text'"
						:value="item.value"
						:id="item.id"
						@delete="deleteItem"
					></app-text>
				</div>
			</div>
			<div v-else>
				<h3>Добавьте первый блок, чтобы увидеть результат</h3>
			</div>
		</div>
  </div>
  
	<app-comment></app-comment>
	
</template>

<script>
import AppComment from './components/AppComment.vue'
import AppMenu from './components/AppMenu.vue'
import AppTitle from './components/AppTitle.vue'
import AppSubtitle from './components/AppSubtitle.vue'
import AppAvatar from './components/AppAvatar.vue'
import AppText from './components/AppText.vue'
import axios from 'axios'

export default {
	data() {
		return {
			value: '',
			type: 'title',
			dataCV: [],
		}
	},
	mounted() {
		this.createCV()
	},
	computed: {

	},
	methods: {
		async addtoCV() {
			const response = await fetch('https://vue-http-demo-1c3ab-default-rtdb.firebaseio.com/cv.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',	
				},
				body: JSON.stringify({
					type: this.type,
					value: this.value,
				}),
			})
			const firebaseData = await response.json()
			this.dataCV.push({
				type: this.type,
				value: this.value,
			})
			this.type = 'title'
			this.value = ''
		},
		async createCV() {
			try {
				const {data} = 	await axios.get('https://vue-http-demo-1c3ab-default-rtdb.firebaseio.com/cv.json');
				this.dataCV = Object.keys(data).map(key => {
				return {
					type: data[key].type,
					value: data[key].value,
					id: key,
				}
			})
			} catch(e) {
				console.log(e.message);
			}
		},
		async deleteItem(id) {
			try {
				await axios.delete(`https://vue-http-demo-1c3ab-default-rtdb.firebaseio.com/cv/${id}.json`);
				this.dataCV = this.dataCV.filter(item => item.id !== id)
			} catch(e) {
				console.log(e.message);
			}
		}
	},
  components: { 
	'app-menu':	AppMenu, 
	'app-comment': AppComment,
	'app-title': AppTitle,
	'app-subtitle': AppSubtitle,
	'app-avatar': AppAvatar,
	'app-text': AppText,
 },

}
</script>

<style>
</style>
