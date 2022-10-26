<template>
  <div class="footer">
    <div class="about_us">
      <div class="about_us_logo">
        <img src="../assets/Logo2.svg" alt="">
        <p>Коммунальное государственное казенное предприятие «Алматы Әуендері» управления культуры города Алматы</p>
      </div>
      <div class="about_us_text">
        <div class="socials">
          <p>Наши соцсети</p>
          <div class="soc">
            <img src="../assets/Ellipse4.svg" alt="">
            <img src="../assets/Ellipse4.svg" alt="">
            <img src="../assets/Ellipse4.svg" alt="">
          </div>

        </div>
        <div class="navbar">
          <ul id="first">
            <li><a href="#events">Наши мероприятия</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Зрителям</a></li>
            <li><a href="#">Организаторам</a></li>
          </ul>

          <ul id="second">
            <li><a href="#">Публичный договор</a></li>
            <li><a href="#">Гос. закупки</a></li>
            <li><a href="#">Оформление возврата</a></li>
            <li><a href="#">Логотипы организаторам</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="partners">
      <img src="../assets/p1.png" alt="">
      <img src="../assets/p2.png" alt="">
      <img src="../assets/p3.png" alt="">
      <img src="../assets/p4.png" alt="">
      <img src="../assets/p5.png" alt="">
      <img src="../assets/p6_.png" alt="">
    </div>

    <p id="rights">
      © 2022 - Almaty áýenderi. Все права защищены
    </p>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  position: relative;
  margin-top: 50px;
  width: 1439px;
  height: 70vh;
}

.footer .about_us {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.footer .about_us .about_us_logo {
  position: relative;
  width: 30%;
  height: 340px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}

.footer .about_us .about_us_logo img {
  max-width: 100%;
}

.footer .about_us .about_us_logo p {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  color: #FFFFFF;
  padding: 2rem;
}

.footer .about_us .about_us_text {
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.footer .about_us .about_us_text .socials {
  position: relative;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: #000000 1px solid;
  border-bottom: #000000 1px solid;
}

.footer .about_us .about_us_text .socials p {
  width: 30%;
}

.footer .about_us .about_us_text .socials .soc {
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.footer .about_us .about_us_text .navbar {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin-top: 40px;
}

.footer .about_us .about_us_text .navbar #first {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 30%;
}

.footer .about_us .about_us_text .navbar #first li a {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 2rem;
  letter-spacing: 0.01em;
  color: #1D1D1D;
}

.footer .about_us .about_us_text .navbar #second {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 40%;
}

.footer .about_us .about_us_text .navbar #second li a {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 2rem;
  letter-spacing: 0.01em;
  color: #1D1D1D;
}

.footer .partners {
  position: relative;
  width: 100%;
  margin-top: 50px;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: #000000 2px solid;
  border-bottom: #000000 2px solid;
}

.footer .partners img {
  width: 5%;
}

.footer #rights {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.0125em;
  text-transform: uppercase;
  color: #1D1D1D;
  text-align: center;

  position: relative;
  width: 100%;
  margin-top: 20px;
}

@media screen and (max-width: 1360px) {
  .footer {
    width: 90vw;
    height: 90vh;
  }
}

@media screen and (max-width: 420px) {
  .footer {
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 1.5rem;
  }

  .footer .about_us {
    flex-direction: column;
  }

  .footer .about_us .about_us_logo {
    width: 100%;
    height: 100%
  }

  .footer .about_us .about_us_text {
    width: 100%;
    margin-top: 2rem;
  }

  .footer .about_us .about_us_text .socials p {
    width: 50%;
  }

  .footer .about_us .about_us_text .navbar {
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;
  }

  .footer .about_us .about_us_text .navbar #first {
    width: 50%;
  }

  .footer .about_us .about_us_text .navbar #second {
    width: 50%;
  }

  .footer .partners {
    height: auto;
    margin-top: 1.5rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 1rem;
    column-gap: 2em;
  }

  .footer .partners img {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .footer #rights {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #1D1D1D;
    text-align: center;

    position: relative;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>