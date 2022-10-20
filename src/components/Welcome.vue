<template >
  <div class="welcome">
    <div class="backimg">
      <img src="../assets/intersect.png" alt="">
    </div>
    <div class="welcome__text">
      <h1>Добро пожаловать во Дворец Республики!</h1>
      <p>Встречайте своих любимых артистов в лучшем зале страны</p>
      <BtnWhite @click="$router.push('/events')">Наши мероприятия</BtnWhite>
      <!-- <p id="events" >Наши мероприятия</p> -->
    </div>
  </div>
</template>

<script>

import BtnWhite from '@/components/UI/BtnWhite.vue';
export default {
    components: { 
      BtnWhite 
    }
}
</script>

<style scoped>
.welcome {
  height: 600px;
  width: 100vw;
  position: relative;
  display: block;
  overflow: hidden;
}
.backimg {
  display: flex;
  justify-content: center;
}
.welcome__text {
  position: absolute;
  max-width: 25vw;
  height: 30vh;
  background: black;
  margin-left: 15vw;
  margin-top: -25vh;
  color: #ffffff;
  padding: 15px;
}

h1 {
  font-weight: 800;
  line-height: 1.2em;
  font-size: 2rem;
  margin: 0;
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5em;
}

button {
  position: absolute;
  left: 220px;
  top: 220px;
}
@media screen and (max-width: 1360px) {
  button {
  left: 106px !important;
  top: 146px !important;
}
}
@media screen and (max-width: 1680px) {
  button {
  left: 180px !important;
  top: 210px !important;
}
}
</style>