<template>
  <header class="navbar">
    Vuex counter {{ counter}} ({{ double }})
		<button class="btn" @click="addCount">add 5</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
  export default {
		computed: {
			...mapGetters('count', ['counter']),
			// counter() {
			// 	return this.$store.getters.counter
			// },
			double() {
				return this.$store.getters.doubleCounter
			},
			
		},
		methods: {
			...mapMutations('count', ['add']),
			addCount() {
				this.add(5)
				// this.$store.commit('add', 5)
			}
		}
  }
</script>
