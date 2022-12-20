<template>
  <div class="app">
    <RouterView>
      
    </RouterView>
  </div>
</template>

<script>
export default {

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
</style>

