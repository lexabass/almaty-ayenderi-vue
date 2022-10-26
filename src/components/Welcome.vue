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
  height: 70vh;
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
  /* height: 30vh; */
  background: black;
  margin-left: 15vw;
  margin-top: -25vh;
  color: #ffffff;
  padding: 1rem;
}

h1 {
  font-weight: 800;
  line-height: 1.2em;
  font-size: 2rem;
  padding-bottom: 1rem;
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5em;
  padding-bottom: 7rem;
}

button {
  position: absolute;
  left: 50%;
  top: 80%;
}


@media screen and (max-width: 1680px) {
  button {
    left: 180px ;
    top: 210px ;
  }
}

@media screen and (max-width: 1360px) {
  .welcome {
    height: 100vh;
  }
  button {
    left: 30% ;
    top: 70% ;
  }

  .welcome__text {
    margin-left: 7vw ;
  }

  .welcome__text h1 {
    font-weight: 800;
    line-height: 1.2em;
    font-size: 1.5rem ;
    padding-bottom: 1rem;
  }

  .welcome__text p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem ;
    line-height: 1.5em;
    padding-bottom: 8rem;
  }
}

@media screen and (max-width: 420px) {
  .welcome {
    height: 70vh;
  }

  .welcome__text {
    max-width: 80vw;
    padding: 1.2rem;
    right: 0;
  }

  .welcome__text h1 {
    font-weight: 700;
    line-height: 1.2em ;
    font-size: 1.3rem;
    margin: 0;
  }

  .welcome__text p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5em;
    padding-bottom: 5rem;
  }

  button {
    position: absolute;
    left: 30%;
    top: 75%;
  }
}

@media screen and (max-width: 380px) {
  .welcome {
    height: 100vh;
  }
}
</style>