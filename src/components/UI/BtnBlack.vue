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
  width: 207px;
  height: 32px;
  border: 1px solid #000;
  border-radius: 35px;
}
</style>