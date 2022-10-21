<template >
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  
}
</script>

<style scoped>
button {
  cursor: pointer;
  color: #000;
  height: 32px;
  max-width: 30%;
  width: auto;
  border: 1px solid #000;
  border-radius: 35px;
}
</style>