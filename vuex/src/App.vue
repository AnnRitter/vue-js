<template>
	<the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter}})</h2>
			<button class="btn" @click="add">add</button>
			<button class="btn" @click="incrementAsync({ value: 10, delay: 500})">add 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
	computed: {
		...mapGetters('count', ['counter', 'doubleCounter']),
		...mapGetters(['uppercaseTitle'])
	},
  components: {TheNavbar},
	methods: {
		...mapActions('count', ['incrementAsync']),
		// add() {
		// 	this.$store.dispatch('incrementAsync', {
		// 		value: 10,
		// 		delay: 500,
		// 	})
		// }
		...mapMutations({add: 'count/increment'})
	}
}
</script>
