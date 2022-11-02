<template>
  <div class="container">
    <app-text-prev v-if="active === 'prev'"></app-text-prev>
    <app-text-next v-else></app-text-next>
  </div>
</template>

<script>
import AppTextPrev from './AppTextPrev'
import AppTextNext from './AppTextNext'
export default {
  props: {
    active: {
      type: String,
      required: true,
    }
  },
  components: {
    'app-text-prev': AppTextPrev,
    'app-text-next': AppTextNext,
  }
}
</script>