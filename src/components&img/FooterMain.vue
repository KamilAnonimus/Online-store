<template>
    <footer>
      <div class="footer__nameLogo-navigation">
        <div class="footer__name-logo">
        <img src="./img/Logo.png">
        <div class="name-logo__name-description">
          <div class="name-description__name">NATFASH</div>
          <div class="name-description__description">
            National clothes<br>
            in elite style
          </div>
        </div>
        </div>
        <div class="footer__navigation">
          <div class="navigation__ Hoodies">Hoodies</div>
          <div class="navigation__ T-shirts">T-shirts</div>
          <div class="navigation__ Vests">Vests</div>
          <div class="navigation__ footer-Pants">Pants</div>
        </div>
      </div>
      <div class="footer__learn-information">
        <div class="learn-information__ learn"><h3>LEARN</h3></div>
        <div class="learn-information__ store-policy">Store policy</div>
        <div class="learn-information__ DeliveryAndReturns">Delivery and returns</div>
        <div class="learn-information__ PaymentMethods">Payment Methods</div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navigation__ {
    color: white;
    margin-top: 32px;
    text-align: center;
  }
  .footer-Pants {
    margin-bottom: 57px;
  }

  .learn-information__ {
    color: white;
    text-align: center;
    margin-top: 32px;
    width: 160px;
  }
  .learn {
    margin-top: 58px;
    font-size: 16px;
  }

  .footer__name-logo {
    margin-top: 33px;
  }
  
  .navigation__:hover, .learn-information__:hover {
    font-weight: 600;
  }

  .name-logo__name-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 13px;
  }

  .name-description__description {
    font-size: 11px;
    width: 132px;
  }
  .name-description__name {
    color: #E2B64A;
    width: 65px;
    height: 16px;
    font-size: 13px;
  }
  .footer__name-logo {
    display: flex;
  }
</style>
