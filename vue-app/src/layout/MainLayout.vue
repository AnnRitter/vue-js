<template>
	<the-navbar></the-navbar>
	<div class="container with-nav">
	<app-message></app-message>
	<router-view></router-view>
</div>
</template>
<script>
import TheNavbar from '../components/TheNavbar.vue';
import AppMessage from '../components/ui/AppMessage.vue';
export default {
setup() {

},
components: {
	TheNavbar,
	AppMessage,
}
}
</script>