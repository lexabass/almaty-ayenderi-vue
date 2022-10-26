<template>
  <div class="events" id="events">
    <div class="events__top">
      <h1 id="title">Наши мероприятия</h1>
      <div class="events_top_btns">
        <BtnBlack>Дворец Республики</BtnBlack>
        <BtnBlack>Almaty Gallery</BtnBlack>
        <BtnBlack>Театр кукол</BtnBlack>
      </div>
    </div>
    <EventList :events="events" />
    <div class="see_all" @click="$router.push('/events')">
      <p>Посмотреть все</p>
      <div class="btn">
        <img src="../assets/Ellipse1.png" alt="">
        <img id="arrow" src="../assets/Arrow1.png" alt="">
      </div>
    </div>
    <!-- <hr style="width: 100%; margin-top: 6vh;"> -->
  </div>


</template>
  
<script>
import BtnBlack from '@/components/UI/BtnBlack.vue'
import EventList from '@/components/EventList.vue'
import { useEvents } from '@/hooks/useEvents'
import axios from 'axios'
export default {
  components: {
    BtnBlack,
    EventList,
  },
  setup(props) {
    const { events } = useEvents(4);
    return {
      events,
    }
  }

}
</script>
  
<style>
.events {
  width: 90vw;
  margin-bottom: 50px;
  padding-bottom: 1rem;
  border-bottom: #000000 2px solid;
  margin-top: 70px;
}

.events #title {
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 49px;


  color: #1D1D1D;
}

.events__top {
  display: flex;
  justify-content: space-between;
  width: 90vw;
}

.events_top_btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
}

.events_top_btns button {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  text-align: center;
  letter-spacing: 0.0118em;

  max-width: 45%;
  height: 34px;
  padding: 0 2%;

  border-radius: 24px;
}

.see_all {
  float: right;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  cursor: pointer;
}

.see_all p {
  margin-right: 10px;
}

.see_all .btn img {
  /* max-width: 50%; */
  height: 50%;
}

.see_all .btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.see_all .btn #arrow {
  position: absolute;
  width: 14px;
  height: 12px;
}

@media screen and (max-width: 1360px) {

  .events__top {
    width: 90vw;
  }

  .events_top_btns {
    width: 42%;
  }
}

@media screen and (max-width: 420px) {
  .events #title {
    font-style: normal;
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 1em;
    padding-bottom: 1rem;
  }

  .events__top {
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
  }

  .events_top_btns {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .events_top_btns button {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 1rem;

    text-align: center;
    letter-spacing: 0.0118em;

    max-width: 100%;
    height: 2rem;
    padding: 0 1%;
    margin-right: 0.7rem;
    border-radius: 2rem;
  }
}
</style>