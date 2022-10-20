<template>
  <div class="event__item">
    <div class="event__info">
      <div>Имя актера или группы {{item.id}} </div>
      <div>
        <h1>Название:</h1> {{ item.title}}
      </div>
      <div class="event_info_date">
        <div>Дата: {{ Date.now() }}</div>
        <div>Время: {{ Date.now() }}</div>
        <BtnWhite @click="$router.push(`/events/${item.id}`)" style="margin-left: 50px; margin-top: 20px;">Купить билеты</BtnWhite>
      </div>

    </div>
    <div class="event__poster">
      <img src="https://picsum.photos/310/410" alt="">
    </div>

  </div>
</template>

<script>
import BtnWhite from '@/components/UI/BtnWhite.vue';
export default {
  components: {
    BtnWhite,
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event__item {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.event__info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  width: 50%;
  background-color: black;
  color: #ffffff;
}

.event__poster {
  width: 50%;
}
.event__poster img {
  width: 100%;
  height: 100%;
}
</style>