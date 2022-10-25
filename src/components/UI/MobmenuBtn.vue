<template>
  <div class="mobmenu_button">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.mobmenu_button {
  margin-left: 10px;
  display: inline-block;
  display: none;
  z-index: 999999;
  position: relative;
  cursor: pointer
}

.mobmenu_button .bar1,
.mobmenu_button .bar2,
.mobmenu_button .bar3 {
  width: 25px;
  height: 3px;
  background-color: rgb(0, 0, 0);
  margin: 4px 0;
  -webkit-transition: .4s;
  -o-transition: .4s;
  transition: .4s
}
</style>