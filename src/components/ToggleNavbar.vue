<template>
  <div id="navigation">
    <ul>
      <li @click="$router.push('/')">Наши мероприятия</li>
      <li @click="$router.push('/viewers')">Зрителям</li>
      <li @click="$router.push('/organizators')">Организаторам</li>
      <li @click="$router.push('/news')">Новости</li>
      <li @click="$router.push('/about')">О нас</li>
      <li @click="$router.push('/contacts')">Контакты</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>