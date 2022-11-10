<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="toLogin">Обратно к логину</button>
  </div>
</template>

<script>
export default {
	methods: {
		toLogin() {
			this.$router.push('/login')
		}
	}
}
</script>