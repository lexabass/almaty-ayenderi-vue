<template>
  <div class="news__item">
    <div class="news__poster">
      <img src="https://picsum.photos/300/200" alt="">
    </div>
    <div class="news__info">
      <h2>Название: {{ item.title}}</h2> 
      <p>Текст: {{ item.body }}</p>
      <p id="read_more" @click="$router.push(`/news/${item.id}`)" style="margin-left: 50px; margin-top: 20px;">Читтать далее
        <img src="style/img/Arrow 2.svg" alt="" id="arrow2">
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
}
</style>