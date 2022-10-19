<template>
  <Header></Header>
  <div class="app">
    <RouterView></RouterView>
  </div>
  
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
@import './assets/reset.css';

</style>
