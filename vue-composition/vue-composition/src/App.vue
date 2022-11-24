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
  components: {
    TheNavbar, 
		New,
  }
}
</script>

<style>

</style>
