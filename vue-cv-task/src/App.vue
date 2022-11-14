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

    <app-cv
			:dataCV="dataCV"
		></app-cv>

  </div>
  
	<app-comment></app-comment>
	
</template>

<script>
import AppComment from './components/AppComment.vue'
import AppMenu from './components/AppMenu.vue'
import AppCV from './components/AppCV.vue'

export default {

	data() {
		return {
			value: '',
			type: 'title',
			dataCV: [],
		}
	},
	computed: {

	},
	methods: {
		addtoCV() {
			this.dataCV.push({
				type: this.type,
				value: this.value,
			})
			this.type = 'title'
			this.value = ''
			console.log(this.type);
			console.log(this.value);
		}
	},
  components: { 
	'app-menu':	AppMenu, 
	'app-comment': AppComment,
	'app-cv': AppCV,
 },

}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
