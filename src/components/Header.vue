<template>
  <div class="header">
    <div class="header__wrapper section">
      <div @click="$router.push('/')" id="logo"><img src="../assets/Logo.svg" alt="Almaty Ayenderi" id="logo"></div>
      <nav class="navbar__btns">
        <div class="nav_bar_up">
          <div class="search__lang">
            <img src="../assets/search.png" id="search" />
            Поиск
          </div>
          <div class="search__lang" id="lang">
            <img src="../assets/language.png" id="language" style="padding-right: 20%;"/>
            Рус/Каз
          </div>
        </div>
        <ul class="nav">
          <li @click="$router.push('/')">Наши мероприятия</li>
          <li @click="$router.push('/viewers')">Зрителям</li>
          <li @click="$router.push('/organizators')">Организаторам</li>
          <li @click="$router.push('/news')">Новости</li>
          <li @click="$router.push('/about')">О нас</li>
          <li @click="$router.push('/contacts')">Контакты</li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>

export default {
}

</script>

<style scoped>
.header {
  z-index: 99;
  background-color: #ffffff;
  position: relative;
  display: flex;
  justify-content: center;
}

.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
#logo {
  height: 10vh;
  cursor: pointer;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
}

.nav li {
  list-style-type: none;
  font-weight: 800;
  font-size: 15px;
  line-height: 18px;
  margin-left: 30px;
  color: #1D1D1D;
  cursor: pointer;
}
.nav li::after {
  background: none repeat scroll 0 0 transparent;
  bottom: -2px;
  content: "";
  display: block;
  height: 3px;
  left: 50%;
  position: relative;
  background: #000;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.nav li:hover::after {
  left: 10%;
  width: 80%;
}

.navbar__btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}

.nav_bar_up {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.nav_bar_up .search__lang {
  display: flex;
  width: 15%;
  justify-content: space-around;
  align-items: center;
  color: #D4A351;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
}
#lang {
  justify-content:right;
}

</style>