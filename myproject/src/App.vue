<template>
  <div class="container">
    <header>
      <div class="header__ name-logo">
        <img src="./img/Logo.png">
        <div class="name-logo__name-description">
          <div class="name-description__name"><h4>NATFASH</h4></div>
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
        <img class="navigation__btn images" src="./img/ThreeDots.png">
      </div>
      <div class="header__ phoneNumber"><h4>+7 7172 264 55 55</h4></div>
      <div class="header__rightPart">
        <div class="rightPart__ basket-price">
          <img src="./img/shopping-cart.png">
          <div class="basket-price__price">0</div>
        </div>
      </div>
    </header>
    <div class="mainPart">
      <div class="mainPart__upper">
        <div class="upper__description-section">
          <div class="description-section_ thumbnail"><h4>National clothes<br>for the new time</h4></div>
          <div class="description-section__ plain-text">We represent the modern culture <br>of national clothes in sportswear.</div>
          <div class="description-section__ btn">Start shopping</div>
        </div>
        <img class="upper__img-right" src="./img/homepage-img.png">
        <div class="upper__img-history">
          <img src="./img/ОurStory.png">
          <div class="img-history__ name"><h4>Оur story</h4></div>
        </div>
        <div class="upper__img-catalog">
          <img src="./img/ViewCatalog.png">
          <div class="img-history__ name"><h4>View catalog</h4></div>
        </div>
        <div class="upper__connect">
          <img src="./img/JoinInCommunity.png">
          <div class="img-history__ name"><h4>Join in<br>community</h4></div>
        </div>
      </div>
      <div class="mainPart__NewArrivals-part">
        <div class="NewArrivals-part__name-block"><h4>New Arrivals</h4></div>
        <div class="NewArrivals-part__blocks">
          <div class="blocks__FarLeft">
            <div class="FarLeft__img-signNew">
              <div class="img-signNew__ sign-new">New</div>
              <img class="img-signNew__img" src="./img/Rectangle11.png">
            </div>
            <div class="FarLeft__ name-sentence">Costume Set “TOKYO 2020”</div>
            <div class="FarLeft__ price-sentence">$87.00</div>
          </div>
          <div class="blocks__Left">
            <div class="Left__img-signNew">
              <div class="img-signNew__ sign-new">New</div>
              <img class="img-signNew__img" src="./img/Rectangle12.png">
            </div>
            <div class="Left__ name-sentence">Sweatshirt with “History” patch</div>
            <div class="Left__ price-sentence">$38.00</div>
          </div>
          <div class="blocks__Right">
            <div class="Right__img-signNew">
              <div class="img-signNew__ sign-new">New</div>
              <img class="img-signNew__img" src="./img/Rectangle13.png">
            </div>
            <div class="Right__ name-sentence">T-shirt with “History” patch</div>
            <div class="Right__ price-sentence">$21.00</div> 
          </div>
          <div class="blocks__FarRight">
            <div class="FarRight__img-signNew">
              <div class="img-signNew__ sign-new">New</div>
              <img class="img-signNew__img" src="./img/Rectangle14.png">
            </div>
            <div class="FarRight__ name-sentence">Shirt with “History” patch</div>
            <div class="FarRight__ price-sentence">$21.00</div>
          </div>
        </div>
      </div>
      <div class="mainPart__lower">
        <div class="lower__name-section"><h4>Follow us on social networks!</h4></div>
        <div class="lower__pictures">
          <img src="./img/Rectangle12(1).png" class="pictures__ FarLeft">
          <img src="./img/Rectangle13(1).png" class="pictures__ Left">
          <img src="./img/Rectangle14(1).png" class="pictures__ Right">
          <img src="./img/Rectangle15.png" class="pictures__ FarRight">
        </div>
      </div>
    </div>
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
  </div>
</template>

<style>
*,*::before,*::after {box-sizing: border-box;}
ul[class],ol[class] {
  padding: 0;
  list-style: none;
}
body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd {margin: 0;}
input,button,textarea,select {font: inherit;}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  display: flex;
  justify-content: center;
}
#app {width: 100%;}

.container {
  max-width: 1170px;
  margin: 0 auto;
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

.navigation__btn {
  padding-left: 46px;
}

.name-logo {
  padding-bottom: 15px;
  padding-top: 15px;
}

.mainPart__upper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.upper__description-section {
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.thumbnail  {
  font-size: 36px;
}

.description-section__ {
  margin-top: 32px;
}
.btn {
  color: #FFFFFF;
  background-color: black;
  padding-top: 21px;
  padding-bottom: 21px;
  padding-left: 67px;
  padding-right: 67px;
}

.name {
  color: white;
  position: relative;
  bottom: 145px;
  text-align: center;
  font-size: 22px;
}

.NewArrivals-part__name-block {
  text-align: center;
  font-size: 27px;
}

.NewArrivals-part__blocks, .footer__name-logo {
  display: flex;
}

.img-signNew__img {
  width: 100%;
}
.sign-new {
  font-size: 11px;
  background-color: #848484;
  text-align: center;
  width: 94px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  position: relative;
  top: 62.5px;
  left: 40px;
}

.name-sentence, .price-sentence {
  text-align: center;
  margin-bottom: 12px;
}

.lower__name-section {
  text-align: center;
  font-size: 27px;
  margin: 60px;
}

.pictures__ {
  margin-left: 22px;
  margin-bottom: 120px;
}

footer {
  background-color: #757575;
  display: flex;
  justify-content: space-around;
}

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
}
.learn {
  margin-top: 58px;
  font-size: 16px;
}

.footer__name-logo {
  margin-top: 33px;
}
</style>