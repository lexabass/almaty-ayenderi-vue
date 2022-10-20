<template>
  <div class="contacts_section">
    <div class="information">
      <div class="data">
        <h1>Адрес</h1>
        <p>Проспект Достык, 56</p>
        <p style="margin-top: 0px;">А25ЕОВ9 - Алматы, Казахстан</p>
      </div>
      <div class="data">
        <h1>Кассы</h1>
        <p>ПН-ПТ с 11:00 до 19:00</p>
        <p style="margin-top: 0px;">СБ-ВС и праздничные дни с 11:00 до 19:00</p>
      </div>
      <div class="data">
        <h1>Контакты</h1>
        <a href="tel:+7 (727) 291 54 92">+7 (727) 291 54 92</a> 
        <a href="tel: +7 (727) 291 55 14" style="margin-top: 0px;"> +7 (727) 291 55 14</a> 
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contacts_section {
    position: relative;
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: no-repeat center/100% url("../assets/zal2.png")
}

.contacts_section .information {
    position: relative;
    width: 80vw;
    height: 40%;
    background: #FFFFFF;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.contacts_section .information .data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contacts_section .information .data h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
}

.contacts_section .information .data p, a{
    font-style: italic;
    font-weight: 200;
    font-size: 16px;
    text-align: center;
    color: #000000;
    margin-top: 20px;
}
</style>