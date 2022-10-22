<template>
  <div class="event__item">
    <div class="event__info">
      <div class="group__1">
        <div class="author_title">Имя актера или группы {{item.id}} </div>
        <div>
          <h1>Название: {{ item.title}}</h1>
        </div>
      </div>

      <div class="group__2">
        <div class="event_info_date">
          <div>Дата: {{ Date.now() }}</div>
          <div>Время: {{ Date.now() }}</div>
          <BtnWhite @click="$router.push(`/events/${item.id}`)">Купить
            билеты</BtnWhite>
        </div>
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
  max-height: 100%;
}

.event__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5%;
  padding-bottom: 8%;
  width: 52%;
  background: #1D1D1D;
  color: #ffffff;
}

.group__1 {
  padding-bottom: 3rem;
}

.event_info_date {
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 18px;
}

.event__info .author_title {
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 18px;
  padding-bottom: 10%;
}

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
}

.event__poster {
  width: 48%;
}

button {
  margin-top: 20px;
  float: right;
  max-width: 60%;
  padding: 0% 3%;
}

.event__poster img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 1360px) {
  h1 {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  
}
</style>