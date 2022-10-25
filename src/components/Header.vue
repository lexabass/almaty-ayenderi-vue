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
            <img src="../assets/language.png" id="language" />
            Рус/Каз
          </div>

          <MobmenuBtn @click="openMenu" />

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
    <transition name="slide-fade" class="mobmenu_body">
      <nav v-show="menu" class="mobmenu_nav">
        <ul>
          <li @click="$router.push('/'), openMenu()">Наши мероприятия</li>
          <li @click="$router.push('/viewers'), openMenu()">Зрителям</li>
          <li @click="$router.push('/organizators'), openMenu()">Организаторам</li>
          <li @click="$router.push('/news'), openMenu()">Новости</li>
          <li @click="$router.push('/about'), openMenu()">О нас</li>
          <li @click="$router.push('/contacts'), openMenu()">Контакты</li>
        </ul>

      </nav>
    </transition>
  </div>
</template>

<script>
import MobmenuBtn from './UI/MobmenuBtn.vue';
import { ref } from 'vue';


export default {
  components: {
    MobmenuBtn
  },
  setup() {
    const menu = ref(false);
    function openMenu() {
      menu.value = !menu.value;
    }
    return {
      menu,
      openMenu
    }
  }


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

#logo img {
  padding-right: 20%;
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
  align-items: center;
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

.mobmenu_body {
  display: none;
  background: #fff;
  height: 100vh;
  position: fixed;
  width: 100vw;
  top: 0;
  padding-top: 10vh;
  padding-left: 20px;
  z-index: 99999;
}

.mobmenu_body li {
  font-size: 1.5rem;
  line-height: 1.5;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}


@media screen and (max-width: 420px) {
  .header__wrapper {
    padding: 15px;
    width: 100%;
  }

  #logo {
    height: 6vh;
  }
  .nav {
    display: none;
  }

  .navbar__btns[data-v-61dd7a3d] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
  }

  .mobmenu_button {
    display: inline-block;
  }

  .nav_bar_up .search__lang {
    width: 35%;
    font-size: 0.7rem;
  }

  .nav_bar_up #lang {
    justify-content: space-around;
    width: 40%;
  }

  .nav_bar_up #lang>img {
    padding-right: 0;
  }
  .mobmenu_body {
    display: block;
    touch-action: none;
  }
}
</style>