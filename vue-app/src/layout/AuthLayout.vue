<template>
<div class="container">
	<router-view></router-view>
</div>
</template>
<script>
import Auth from '../views/Auth.vue';
export default {
	components: {
		Auth,
	}
}
</script>