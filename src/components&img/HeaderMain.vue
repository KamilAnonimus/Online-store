<template>
  <header>
    <div class="header__ name-logo">
      <img src="./img/Logo.png">
      <div class="name-logo__name-description">
        <div class="name-description__name">
          <h4 class="name__h4">NATFASH</h4>
        </div>
        <div class="name-description__description">
          National clothes<br>
          in elite style
        </div>
      </div>
    </div>
    <div class="header__navigation">
      <div class="navigation__btn T-shirts">T-shirts</div>
      <div class="navigation__btn Sweatshirts">Sweatshirts</div>
      <div class="navigation__btn Vests">Vests</div>
      <div class="navigation__btn Pants">Pants</div>
      <img class="navigation__btnimages" src="./img/ThreeDots.png">
    </div>
    <div class="header__ login-registration">
      <RouterLink to="/Login&Registration"><div class="login-registration__ login">Login</div></RouterLink>
      <div class="login-registration__ separator">|</div>
      <div class="login-registration__ registration">Registration</div>
    </div>
    <div class="header__rightPart">
      <div class="rightPart__ basket-price">
        <img src="./img/shopping-cart.png">
        <div class="basket-price__price">0</div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  
}
</script>

<style>
  .navigation__btn {
    padding-left: 46px;
    width: 110px;
  }

  .name-description__name {
    color: #E2B64A;
    width: 65px;
    height: 16px;
    font-size: 13px;
  }
  .name-description__description {
    font-size: 11px;
    width: 132px;
  }
  
  .name-logo, header, .header__navigation, .header__rightPart, .basket-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .rightPart__, .basket-price__price {
    padding-right: 10px;
    padding-left: 10px;
  }
  
  .name-logo__name-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 13px;
  }
  
  .name-logo {
    padding-bottom: 15px;
    padding-top: 15px;
  }

  .name__h4 {
    margin: 0;
  }
</style>