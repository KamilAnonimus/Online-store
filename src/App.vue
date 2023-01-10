<template>
  <div class="app"
       :class="{'appLoanding':this.$store.state.visibilityApp}">
    <RouterView>
      
    </RouterView>
    
  </div>
  <LoandingVue/>
</template>

<script>
import LoandingVue from '@/components&img/Loanding.vue';
import { check } from './http/userAPI';
import jwt_decode from "jwt-decode";
import {fetchTypes} from './http/clothesAPI'

export default {
  beforeCreate() {
    check().finally(() => {
      this.$store.state.visibilityLoader = true
      this.$store.state.visibilityApp = false
      this.$store.state.userInfo = jwt_decode(localStorage.getItem('token'))
      this.$store.state.authorizedUser = true
    })
    fetchTypes().then(data => this.$store.state.clothestype = data)
  },

  components: {
    LoandingVue,
  },
}
</script>

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
a {
  text-decoration: none;
  color: black;
  }
#app {width: 100%;}

.appLoanding {
  display: none;
}
</style>

