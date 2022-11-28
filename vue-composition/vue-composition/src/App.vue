<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import New from './views/New.vue'

export default {
	mounted() {
		this.$store.dispatch('load');
	},
  components: {
    TheNavbar, 
		New,
  }
}
</script>

<style>

</style>
