<template>
  <div class="news" id="news">
    <h1>Интересные новости</h1>
    <NewsList :news="news" />
  </div>


</template>
  
<script>
import NewsList from '@/components/NewsList.vue'
import { useNews } from '@/hooks/useNews'
import axios from 'axios'
export default {
  components: {
    NewsList,
  },
  setup(props) {
    const { news } = useNews(4);
    return {
      news,
    }
  }

}
</script>
  
<style>
.news {
  width: 1439px;
  padding-bottom: 1rem;
  position: relative;
  height: 60vh;
  display: flex;
  flex-direction: column;
}

.news h1 {
  margin-bottom: 30px;
}

@media screen and (max-width: 1360px) {
  .news {
    width: 90vw;
    height: 90vh;
  }
  .news h1 {
    height: 10%;
    margin-bottom: 0;
  }
}
</style>