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
  width: 90vw;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.news h1 {
  margin-bottom: 30px;
}

@media screen and (max-width: 1360px) {
  

  .news h1 {
    height: 10%;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 420px) {
  .news h1 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1em;
    padding-bottom: 1rem;
  }
}
</style>