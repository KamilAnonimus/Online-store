<template>
  <header>
    <RouterLink to="/">
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
    </RouterLink>
    <div class="header__navigation">
      <div class="navigation__btn oneType">{{this.$store.state.clothestype[0].name}}</div>
      <div class="navigation__btn twoType">{{this.$store.state.clothestype[1].name}}</div>
      <div class="navigation__btn threeType">{{this.$store.state.clothestype[2].name}}</div>
      <div class="navigation__btn fourthType">{{this.$store.state.clothestype[3].name}}</div>
      <div class="navigation__btnOtherTypesOfClothing">      
        <div class="btnOtherTypesOfClothing ThreesPoints" @mouseover="visibleOthersTypeClothes">
          <div class="threesPoints_ one"></div>
          <div class="threesPoints_ two"></div>
          <div class="threesPoints_ three"></div>
        </div>
        <div class="btnOtherTypesOfClothing_typesNameClothes"
             :class="{'visible':activeVisibelOthersTypeClothes}" @mouseleave="visibleOthersTypeClothes">
          <div class="typesNameClothes_visible"></div>
          <div class="typesNameClothes_ fifthType">{{this.$store.state.clothestype[4].name}}</div>
          <div class="typesNameClothes_ sixthType">{{this.$store.state.clothestype[5].name}}</div>
          <div class="typesNameClothes_ sevenType">{{this.$store.state.clothestype[6].name}}</div>
        </div>
    </div>
    </div>
    <div class="header__ login-registration">
      <RouterLink to="/Login&Registration"><div class="login-registration__ login"
                                                :class="{'login-registration__ authorized':this.$store.state.authorizedUser}">Login | Registration</div></RouterLink>
    <div class="login-registration__ uservisibilityFalse"
         :class="{'login-registration__ authorized':!this.$store.state.authorizedUser}">{{this.$store.state.userInfo.email}}</div>
    <div class="login-registration__ uservisibilityFalseExit" v-on:click="exitAccount"
         :class="{'login-registration__ authorized':!this.$store.state.authorizedUser}">Выйти</div>
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
  data() {
    return {
      activeVisibelOthersTypeClothes: false,
    }
  },

  methods: {
    exitAccount() {
      this.$store.state.userInfo = []
      this.$store.state.authorizedUser = false
      this.$store.state.visibilityRoomUser= false
      localStorage.clear();
    },
    visibleOthersTypeClothes() {
      this.activeVisibelOthersTypeClothes = !this.activeVisibelOthersTypeClothes; 
    }
  }
}
</script>

<style scoped>
  .navigation__btn {
    padding-left: 46px;
    width: 100px;
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
  
  .NewArrivals-part__blocks, .footer__name-logo, .login-registration, .navigation__btn {
    display: flex;
    flex-direction: row;
    align-items: center;

    min-height: 20px;
  }

  .navigation__btn:hover, .login-registration__:hover {
    font-weight: 600;
  }
  
  .login {
    width: 170px;
  }

  .authorized {
    display: none;
  }

  .login-registration__ {
    margin-left: 10px;
  }

  .uservisibilityFalse, .uservisibilityFalseExit {
    width: 100px;
  }

  .threesPoints_ {
    background-color: black;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    z-index: 99;
  }

  .two, .three {
    margin-left: 5px;
  }

  .btnOtherTypesOfClothing {
    width: 50px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 67px;
  }
  
  .navigation__btnOtherTypesOfClothing {
    display: flex;
    flex-direction: column;
    text-align: center;
    top: 20px;
  }

  .btnOtherTypesOfClothing_typesNameClothes {
    margin-left: 50px;
    position: absolute;
    top: 20px;
    display: none;
  }

  .typesNameClothes_ {
    padding: 20px;
    background-color: white;
    border-radius: 1px;
    border-bottom: 1px solid rgb(223, 221, 221);
  }
  
  .typesNameClothes_visible {
    padding: 20px;
    background-color: white;
  }

  .typesNameClothes_:hover {
    background-color: rgb(238, 238, 238);
    transition: 0.5s;
  }

  .visible {
    display: block;
    opacity: 0;
    animation: ani 0.5s forwards;
  }
  @keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
</style>