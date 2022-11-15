<template>
	<div class="center">
		<div class="avatar">
    	<img :src="value">
  	</div>
		<button class="btn delete" @click="$emit('delete', this.id)">Delete</button>
	</div>
	
</template>

<script>
export default {
	props: ['value', 'id']
}
</script>

<style scoped>
	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		
	}
	.avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 200px;
    height: auto;
    border-radius: 15%;
  }
</style>
