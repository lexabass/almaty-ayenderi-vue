<template>
  <div class="letter">
    <h1>ALMATY GALLERY СОВМЕСТНО С АРТ-ЭКСПО ПРЕДСТАВЛЯЮТ
 ВЫСТАВКУ «ВАН ГОГ. ТАЙНЫ ГЕНИЯ И БЕЗУМЦА</h1>
    <BtnBlack @click="$router.push('/tempevent')">Узнать подробнее</BtnBlack>
  </div>
</template>

<script>
import BtnBlack from '@/components/UI/BtnBlack.vue'
export default {
  components: {
    BtnBlack
  },
  setup(props) {


    return {

    }
  }
}
</script>

<style scoped>
.letter {
  position: relative;
  padding: 20px 100px;
  border: 3px solid black;
  margin-top: 70px;
  width: 1439px;
}

h1 {
  text-align: center;
}
button {
  margin-left: 50vw;
  margin-top: 25px;
}
@media screen and (max-width: 1360px) {
  button {
  margin-left: 60vw !important;
  top: 146px !important;
}

.letter {
  position: relative;
  padding: 20px 100px;
  border: 3px solid black;
  margin-top: 70px;
  width: 90vw;
  margin-bottom: 50px;
}
}
</style>