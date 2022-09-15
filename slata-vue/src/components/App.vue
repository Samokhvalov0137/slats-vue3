<template>
<div class="page">
  <header class="header">
    <div class="header__container">
      <p class="logo"></p>
      <nav class="header__menu">
      <p><router-link to="/" class="header__link">Главная</router-link></p>
      <p><router-link to="/director" class="header__link">Руководитель</router-link></p>
      <p><router-link to="/hr" class="header__link">Кадры</router-link></p>
      <p><router-link to="/login" class="header__link">Выход</router-link></p>
      </nav>
    </div>
  </header>
  <router-view></router-view>
     <footer className="footer">
      <p className="footer__copyright">&copy; 2022. Vlad Samokhvalov</p>
    </footer>
</div>

</template>

<script> 

export default {
  
}
</script>

<style>
.page{
    margin: 0 auto;
    min-width: 320px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
}

.header__container{
    max-width: 880px;
    margin: 0 auto;
    padding-top: 45px;
    padding-bottom: 41px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    color: white;
}

.header__menu{
  display: flex;
  align-items: center;
  width: 404px;
  justify-content: space-between;
  color: #007e39;;
}
.header__link{
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #007e39;;
    text-decoration: none;
}
.logo{
  background-image: url(../images/slata.svg);
  width: 170px;
  height: 43px;
  background-repeat: no-repeat;
  background-size: contain;
}

.footer__copyright{
    margin: 0;
    padding-left: 200px;
    padding-top: 30px;
    font-family: 'Inter', ‘Arial’, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
  
.footer{
    max-width: 100%;
    margin: auto 0px;
    padding-bottom: 30px;
    background-color: #007e39;
  }
</style>