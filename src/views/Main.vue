<template>
  <div class="main">
    <Welcome></Welcome>
    <Letter></Letter>
  </div>
</template>

<script>
// @ is an alias to /src

import Welcome from '@/components/Welcome.vue'
import Letter from '@/components/Letter.vue'
export default {
  components: {
    Welcome,
    Letter
  },
  data() {
    return {

    }
  },
  setup(props) {
    return {

    }
  }
}
</script>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
}
</style>
