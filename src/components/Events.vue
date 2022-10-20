<template>
  <div class="events">
    <div class="events__top">
    <h1>Наши мероприятия</h1>
    <div class="events_top_btns">
      <BtnBlack>Дворец Республики</BtnBlack>
      <BtnBlack style="margin-left: 20px">Almaty Gallery</BtnBlack>
      <BtnBlack style="margin-left: 20px">Театр кукол</BtnBlack>
    </div>
  </div>
  <EventList :events="events" />
  <p id="see_all">Посмотреть все</p>
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
#see_all {
  float: right;
}

@media screen and (max-width: 1360px) {

.events {
  position: relative;
  padding: 20px 100px;
  border: 3px solid black;
  margin-top: 70px;
  width: 90vw;
  margin-bottom: 50px;
}
}
</style>