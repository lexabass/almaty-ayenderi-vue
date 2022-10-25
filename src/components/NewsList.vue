<template>
  <div v-if="news.length > 0" class="news__grid">
    <NewsItem v-for="item in news" :item="item" :key="item.id" />

  </div>
  <h2 v-else style="color: red;">
    Список новостей пуст
  </h2>
</template>

<script>
import NewsItem from '@/components/NewsItem.vue';
export default {
  components: {
    NewsItem,
  },
  props: {
    news: {
      type: Array,
      required: true
    }
  },

}
</script>

<style scoped>
.news__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 3rem;
  height: 100%;
}

@media screen and (max-width: 1360px) {
  .news__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1.5rem;
    height: 100%;
  }
}

@media screen and (max-width: 420px) {
  .news__grid {
    grid-template-columns: 1fr ;
    column-gap: 1.5rem;
    row-gap: 2rem;
  }
}
</style>