<template>
  <div v-if="events.length > 0" class="events__grid">
    <EventItem v-for="item in events" :item="item" :key="item.id" />

  </div>
  <h2 v-else style="color: red;">
    Список мероприятий пуст
  </h2>
</template>

<script>
import EventItem from '@/components/EventItem.vue';
export default {
  components: {
    EventItem,
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  },

}
</script>

<style scoped>
.events__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5rem;
  column-gap: 3rem;
}

@media screen and (max-width: 1360px) {
  .events__grid {
    row-gap: 3rem;
    column-gap: 2rem;
  }
}
@media screen and (max-width: 420px) {
  .events__grid {
  grid-template-columns: 1fr;
  row-gap: 2rem;
}
}
</style>