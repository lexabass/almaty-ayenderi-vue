<template>
  <div class="main">
    <Welcome></Welcome>
    <Letter></Letter>
    <Events></Events>
    <News></News>
    <Contacts></Contacts>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Welcome from '@/components/Welcome.vue'
import Letter from '@/components/Letter.vue'
import Events from '@/components/Events.vue'
import Contacts from '@/components/Contacts.vue'
import Footer from '@/components/Footer.vue'
import News from '@/components/News.vue'
export default {
  components: {
    Welcome,
    Letter,
    Events,
    News,
    Contacts,
    Footer
    
},
  data() {
    return {

    }
  },
  setup(props) {
    return {

    }
  }
}
</script>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
}
</style>
