<template>
<div class="container">
	<app-message></app-message>
	<router-view></router-view>
</div>
</template>
<script>
import Auth from '../views/Auth.vue';
import AppMessage from '../components/ui/AppMessage.vue';
export default {
	components: {
		Auth,
		AppMessage,
	}
}
</script>