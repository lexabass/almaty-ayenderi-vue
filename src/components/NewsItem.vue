<template>
  <div class="news__item">
    <div class="news__poster">
      <img src="https://picsum.photos/300/200" alt="">
    </div>
    <div class="news__info">
      <h2>Название: {{ item.title }} </h2>
      <p id="text">Текст: {{ item.body }}</p>
      <p id="read_more" @click="$router.push(`/news/${item.id}`)">Читать далее<span
          style="margin-left: 10px; font-size: 1.2rem;">&#129046;</span>

        <!-- <img src="../assets/Arrow2.png" alt="" id="arrow2"> -->
      </p>

    </div>


  </div>
</template>

<script>
export default {
  components: {

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
.news__item {
  position: relative;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.news__item .news__poster {
  height: 40%;
}

.news__item .news__poster img {
  width: 100%;
  height: 100%;
}

.news__item .news__info {
  height: 60%;
  padding: 7%;
  padding-bottom: 0;
  background: #1D1D1D;
}

.news__item .news__info h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #FFFFFF;
}

.news__item .news__info #text {
  font-family: 'Montserrat', sans-serif;
  padding-top: 1em;
  font-style: italic;
  font-weight: 200;
  font-size: 16px;
  line-height: 20px;
  color: #9C9C9C;
}

.news__item .news__info #read_more {
  cursor: pointer;

  display: flex;
  align-items: center;
  position: absolute;
  margin-top: 20px;
  bottom: 1rem;
  width: 86%;
  justify-content: flex-end;

  font-style: italic;
  font-weight: 200;
  font-size: 15px;
  line-height: 18px;

  color: #D4A351;
}

@media screen and (max-width: 1360px) {
  h2 {
    font-size: 1em;
  }

  .news__item .news__poster {
    height: 30%;
  }

  .news__item .news__info {
    height: 70%;
    padding: 7%;
    padding-bottom: 0;
    background: #1D1D1D;
  }
}

@media screen and (max-width: 420px) {
  .news__item .news__poster {
    height: 40%;
  }
}
</style>