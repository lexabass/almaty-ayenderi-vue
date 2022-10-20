<template>
  <div class="events" id="events">
    <div class="events__top">
      <h1>Наши мероприятия</h1>
      <div class="events_top_btns">
        <BtnBlack>Дворец Республики</BtnBlack>
        <BtnBlack style="margin-left: 20px">Almaty Gallery</BtnBlack>
        <BtnBlack style="margin-left: 20px">Театр кукол</BtnBlack>
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
  width: 1439px;
  margin-bottom: 50px;
  padding-bottom: 1rem;
  border-bottom: #000000 2px solid;
}

.events__top {
  display: flex;
  justify-content: space-between;
  width: 1439px;
  margin-top: 50px;
}

.events_top_btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .events {
    width: 90vw;
  }

  .events__top {
    width: 90vw;
  }
}
</style>