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
  border: 5px solid black;
  margin-top: 70px;
  width: 90vw;
  padding: 3% 15% 1.5%;
}

h1 {
  text-align: center;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 130.4%;
  /* or 31px */

  letter-spacing: 0.0125em;
}

button {
  position: relative;
  margin-top: 3%;
  float: right;

  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  text-align: center;
  letter-spacing: 0.0118em;

  max-width: 30%;
  height: 41px;
  padding: 0 1%;

  border-radius: 41px;
}

@media screen and (max-width: 1360px) {
  .letter {
    width: 90vw;
    padding: 3% 15% 1.5%;
  }
  h1 {
    font-size: 24px;
  }
}
</style>