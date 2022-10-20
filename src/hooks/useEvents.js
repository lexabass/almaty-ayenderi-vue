import axios from 'axios';
import {onMounted, ref} from 'vue';

export function useEvents(limit) {
  const events = ref([])
  // const totalPages = ref(0)
  // const isPostsLoading = ref(true)
  const fetching = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: limit
        }
      });
      events.value = response.data;
    } catch (e) {
    alert('Ошибка')
    } 
  }

  onMounted(fetching)

  return {
    events,
  }
}
